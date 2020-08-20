<template>
  <div id="yskj">
    <Container>
      <div class="flex flex-wrap yskj-list">
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
        <div style="width:270px;" v-if="list.length % 3 === 2"></div>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        style="text-align:center"
        @change="change"
      />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import Item from "./Item.vue";
import { getArt } from "@/api/index.js";
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
      const resp = await getArt({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
  created() {
    this.$root.menuIndex = 8;
  },
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .yskj-list {
    margin: 50px 0;
    padding: 0 30px;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 880px) {
  .yskj-list {
    margin: 20px 0;
    justify-content: center;
  }
}
</style>
