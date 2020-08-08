<template>
  <div id="jyhd">
    <Container>
      <div class="flex flex-wrap jyhd-list">
        <NewsCard v-for="(item, index) in list" :key="index" :item="item" type="getInteraction"></NewsCard>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        hideOnSinglePage
        @change="change"
        style="text-align:center"></a-pagination>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import NewsCard from "@/components/NewsCard.vue";
import { getInteraction } from "@/api/index.js";
export default {
  name:"jyhd",
  data() {
    return {
      page: 1,
      limit: 9,
      total: 0,
      list: [],
    };
  },
  components: {
    NewsCard,
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
      const tab = this.$route.query.tab ? this.$route.query.tab : "家园互动";
      const resp = await getInteraction({ page: this.page, limit: this.limit,type:tab });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
};
</script>
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .jyhd-list {
    margin: 50px 0;
    padding: 0 30px;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 880px) {
  .jyhd-list {
    margin: 20px 0;
    padding: 0;
    justify-content: flex-start;
  }
}
</style>
