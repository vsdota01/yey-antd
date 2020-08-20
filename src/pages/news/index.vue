<template>
  <div id="jsfc">
    <Container>
      <div class="flex flex-wrap news-list">
        <NewsCard
          v-for="(item, index) in list"
          :key="item.id"
          :index="index"
          :item="item"
          :list="list"
        ></NewsCard>
        <div style="width: 32%;"></div>
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
import NewsCard from "@/components/NewsCard.vue";
import { getNews } from "@/api/index.js";
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
      const resp = await getNews({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
  created() {
    this.$root.menuIndex = 5;
  },
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .news-list {
    margin: 50px 0;
    padding: 0 30px;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 880px) {
  .news-list {
    margin: 20px 0;
    padding: 0;
    justify-content: center;
  }
}
</style>
