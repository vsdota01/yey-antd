<template>
  <div class="section section2">
    <div class="section-space"></div>
    <h2>{{ $local[$root.lang].home.sectionList[1] }}</h2>
    <div class="section-icon">
      <img src="../../assets/images/t-tp.png" alt="" />
    </div>
    <div class="container">
      <div class="swiperbox ">
        <div class="swiper-container ">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in list"
              :key="index"
            >
              <img :src="$fullImgPath(item.imgpath)" :alt="item.title" />
              <div class="swiper-slide-text" style="text-align:center;">
                {{ item.title }}
              </div>
            </div>
          </div>
          <div class="buttonyd">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
import "./swiper-theme.less";
import { getCampus } from "@/api/index.js";
const spaceBetween = window.screen.width > 1000 ? 30 : 6;
export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.list = await getCampus();
    this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        slidesPerView: this.list.length > 4 ? 4 : this.list.length,
        loop: true,
        paginationClickable: true,
        spaceBetween: spaceBetween,
        freeMode: true,
      });
    });
  },
};
</script>
