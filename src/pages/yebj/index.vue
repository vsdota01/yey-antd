<template>
  <div id="yebj-list">
    <Container>
      <div class="flex flex-wrap yebj-list flex-js-betw">
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
        <div style="width: 280px;"></div>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        style="text-align:center"
      />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import Item from "./item.vue";
import { getHealth } from "@/api/index.js";
//幼儿保健
export default {
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      list: [],
    };
  },
  components: {
    Item,
    Container,
  },
  async mounted() {
    this.fGetData();
  },
  methods: {
    change(page) {
      this.page = page;
      this.fGetData();
    },
    async fGetData() {
      const resp = await getHealth({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
  created() {
    this.$root.menuIndex = 4;
  },
};
</script>
<style lang="less" scoped></style>
