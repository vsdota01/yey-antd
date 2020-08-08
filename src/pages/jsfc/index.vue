<template>
  <div id="jsfc">
    <Container>
      <div class="flex flex-wrap jsfc-list">
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
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
import Item from "./jsfcItem.vue";
import { getTeacher } from "@/api/index.js";
//教师风采
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
      const resp = await getTeacher({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
};
</script>
<style lang="less" scoped>
.jsfc-list {
  margin: 50px 0;
  padding: 0 30px;
  justify-content: flex-start;
}
</style>
