<template>
  <div class="home">
    <!--banner -->
    <a-carousel arrows>
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link"><img :src="$fullImgPath(item.imgpath)"/></a>
      </div>
    </a-carousel>
    <!--走进幼儿部 -->
    <Section1 :detail="section1Date" />
    <Section2 />
    <Section3 />
    <Section4 :list="section4Date" />
    <Section5 />
  </div>
</template>
<script>
import "./home.less";
import Section1 from "./section1.vue";
import Section2 from "./section2.vue";
import Section3 from "./section3.vue";
import Section4 from "./section4.vue";
import Section5 from "./section5.vue";
import { getHome, getNews } from "@/api/index.js";
export default {
  data() {
    return {
      bannerList: [],
      section1Date: {},
      section2Date: {},
      section3Date: {},
      section4Date: [],
      section5Date: {},
    };
  },
  components: { Section1, Section2, Section3, Section4, Section5 },
  props: {},
  async mounted() {
    this.bannerList = await getHome();
    const newsList = await getNews({ page: 1, limit: 3 });
    this.section4Date = newsList.list;
    console.log(this.section4Date);
    // this.bannerList = await getHome();
    // this.bannerList = await getHome();
  },
};
</script>
