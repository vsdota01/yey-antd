<template>
  <div id="yebj-list">
    <Container>
      <div class="flex flex-wrap yebj-list">
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        hideOnSinglePage
        @change="change"
        style="text-align:center"
      />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import Item from "./mzzxItem.vue";
import { getStar } from "@/api/index.js";
//幼儿保健
export default {
  data() {
    return {
      page: 1,
      limit: 9,
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
      const resp = await getStar({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
};
</script>
<style lang="less" scoped></style>
