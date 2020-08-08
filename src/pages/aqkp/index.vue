<template>
  <div id="aqkp">
    <Container>
      <div class="flex flex-wrap aqkp-list">
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
        <div style="width: 32%;"></div>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        hideOnSinglePage
        style="text-align:center"
        @change="change"
      />
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import Item from "./Item.vue";
import { getSecurity } from "@/api/index.js";
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
      const resp = await getSecurity({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .aqkp-list {
    margin: 50px 0;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 880px) {
  .aqkp-list {
    margin: 20px 0;
    justify-content: space-between;
  }
}
</style>
