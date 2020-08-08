<template>
  <div class="section section4">
    <div class="section-space"></div>
    <h2>{{ $local[$root.lang].home.sectionList[3] }}</h2>
    <div class="section-icon">
      <img src="../../assets/images/t-tp.png" alt="" />
    </div>
    <div class="container flex flex-wrap">
      <NewsCard
        v-for="(item, index) in list"
        :key="index"
        :item="item"
      ></NewsCard>
      <div v-if="list.length % 3 === 2" style="width: 32%;"></div>
    </div>
  </div>
</template>
<script>
import NewsCard from "@/components/NewsCard.vue";
export default {
  props: ["list"],
  components: { NewsCard },
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .section4 {
    .container {
      justify-content: space-between;
    }
  }
}
@media only screen and (max-width: 880px) {
  .section4 {
    background: #fff;
    .container {
      padding: 0 20px;
      flex-direction: column;
    }
  }
}
</style>
