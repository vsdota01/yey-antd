<template>
  <div class="section section1">
    <div class="section-space"></div>
    <h2>{{ $local[$root.lang].home.sectionList[0] }}</h2>
    <div class="section-icon">
      <img src="../../assets/images/t-tp.png" alt="" />
    </div>
    <div class="container flex flex-wrap">
      <div class="antp">
        <img src="../../assets/home/ab.jpg" />
      </div>
      <div class="antp article">
        <p>
          昆山加拿大国际学校艺术幼儿部是坐落在马鞍山西路1855号，总面积占地4000多平方米，拥有两栋独立教学楼，设有9个教学班，可容纳225名幼儿。紧邻康居示范小区，交通方便，空气质量优良。园内内部设计依照美式幼儿园配置规划，符合艺术双语国际幼儿专业色彩学的设计体系，完全符合环保质量，确保孩子在安全，舒适，整洁的环境中健康成长。艺术幼儿部配备了触摸一体机电脑教学设备；
        </p>
        <p>
          我们采用IB课程体系，以发展“国际情怀”为文化内核，以国际教育理念为外延...
        </p>
        <div class="btn-link more flex flex-center">
          <router-link :to="{ path: '/about' }">
            {{ $local[$root.lang].more }} >
          </router-link>
        </div>
      </div>
      <div class="ablist flex flex-js-betw">
        <dl
          class="flex flex-col"
          v-for="(item, index) in $local[$root.lang].home.ablist"
          :key="index"
        >
          <dt class="flex">
            <img :src="item.imgPath" alt="" width="100%" />
          </dt>
          <dd>{{ item.name }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["detail"],
};
</script>
<style lang="less" scoped>
.section1 {
  background: #fff;
  @media only screen and (min-width: 880px) {
    .ablist {
      width: 100%;
      background: #fff;
      padding: 40px 12px 0 12px;
      dl {
        width: 18%;
        justify-content: flex-start;
        align-items: center;
        dt {
          width: 50%;
        }
        dd {
          margin-top: 8px;
        }
      }
    }
  }
  @media only screen and (max-width: 880px) {
    .ablist {
      width: 100%;
      background: #fff;
      padding: 40px 12px 0 12px;
      dl {
        width: 18%;
        justify-content: flex-start;
        align-items: center;
        dt {
          width: 50%;
        }
        dd {
          text-align: center;
          margin-top: 8px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
