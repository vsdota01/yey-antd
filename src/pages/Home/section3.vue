<template>
  <div class="section section3">
    <div class="section-space"></div>
    <h2>{{ $local[$root.lang].home.sectionList[2] }}</h2>
    <div class="section-icon">
      <img src="../../assets/images/t-tp.png" alt="" />
    </div>
    <div class="container flex flex-wrap">
      <div class="antp newslist">
        <div class="flex flex-col">
          <div
            class="flex flex-js-betw newslist-item flex-ai-center"
            v-for="(item, index) in list"
            :key="index"
          >
            <span>{{ item.title }}</span
            ><span>{{ item.insertTime }}</span>
          </div>
        </div>
        <div class="btn-link more flex flex-center">
          <router-link to="/yzsp">{{ $local[$root.lang].more }} ></router-link>
        </div>
      </div>
      <div class="antp">
        <img src="../../assets/home/sp.png" />
      </div>
    </div>
  </div>
</template>
<script>
//一周食谱
import { getRecipe } from "@/api/index.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    const json = await getRecipe({ page: 1, limit: 5 });
    this.list = json.list;
    console.log(json);
  },
};
</script>
<style lang="less" scoped>
.section3 {
  background: #ffffff;
  @media only screen and (min-width: 880px) {
    .container {
      border-radius: 30px;
      overflow: hidden;
      height: 350px;
      .newslist {
        position: relative;
        padding: 20px 34px 0 40px;
        .newslist-item {
          position: relative;
          height: 40px;
          border-bottom: 1px dashed darkgrey;
          span {
            font-size: 16px;
            &:first-child {
              padding-left: 20px;
              &::before {
                content: "";
                position: absolute;
                left: 8px;
                top: 20px;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background: #000;
              }
            }
            &:last-child {
              color: rgb(145, 145, 145);
            }
          }
        }
      }
      .antp {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media only screen and (max-width: 880px) {
    .container {
      border-radius: 0;
      flex-direction: column-reverse;
      .newslist {
        position: relative;
        padding: 20px 12px 0 12px;
        .newslist-item {
          position: relative;
          height: 44px;
          border-bottom: 1px dashed darkgray;
          span {
            font-size: 16px;
            &:first-child {
              padding-left: 20px;
              &::before {
                content: "";
                position: absolute;
                left: 8px;
                top: 20px;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background: #000;
              }
            }
            &:last-child {
              color: rgb(145, 145, 145);
            }
          }
        }
      }
      .antp {
        height: 100%;
        img {
          object-fit: none;
        }
      }
    }
  }
}
</style>
