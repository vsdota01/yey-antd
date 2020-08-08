<template>
  <div class="section section5">
    <div class="flex flex-wrap pc container">
      <div class="yskj">
        <h2>{{ $local[$root.lang].home.sectionList[4] }}</h2>
        <div class="section-icon">
          <img src="../../assets/images/t-tp.png" alt="" />
        </div>
        <div v-for="(item, index) in list" :key="index">
          <h4>{{ item.title }}</h4>
          <div class="desc ellipsis-2">
            {{ item.content }}
          </div>
        </div>
        <div class="more1 flex flex-ai-center">
          <router-link to="/yskjlist">{{
            $local[$root.lang].more
          }}</router-link>
        </div>
      </div>
      <div class="mzzx">
        <h3>{{ $local[$root.lang].home.sectionList[5] }}</h3>
        <div class="mzzx-item flex">
          <div class="headerImg">
            <img src="../../assets/home/yx.png" />
          </div>
          <div class="flex1 info">
            <div class="flex flex-js-betw flex-ai-center info-name">
              <div>{{ star.name }}</div>
              <div>{{ star.insertTime }}</div>
            </div>
            <div class="flex flex-js-end flex-ai-end showmore">
              <div class="more1 flex flex-ai-center">
                <router-link to="/mzzx">{{
                  $local[$root.lang].more
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <h3 class="ssb">
          {{ $local[$root.lang].home.sectionList[6] }}&lt;1:5&gt;
        </h3>
        <div class="ssb-item">
          <div class="ellipsis-3">
            幼儿园教职工包括专任教师、保育员、卫生保健人员、行政人员、教辅人员、工勤人员。幼儿园保教人员包括专任教师和保育员。全日制幼儿园每班配备2名专任教师和1名保育员，或配备3名专任教师
          </div>
          <div class="flex flex-js-end flex-ai-end showmore">
            <div class="more1 flex flex-center">
              <router-link to="/jsfc">{{
                $local[$root.lang].more
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex container mobile flex-col">
      <div class="yskj">
        <h2>{{ $local[$root.lang].home.sectionList[4] }}</h2>
        <div class="section-icon">
          <img src="../../assets/images/t-tp.png" alt="" />
        </div>
        <div class="flex flex-wrap flex-js-betw">
          <div v-for="(item, index) in list" :key="index" class="yskj-item">
            <h4>{{ item.title }}</h4>
            <div class="desc ellipsis-5">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div class="more1 flex flex-center">
          <router-link to="/yskjlist">{{
            $local[$root.lang].more
          }}</router-link>
        </div>
      </div>
      <div class="flex mzzx">
        <div class="flex flex-col mzzx-item">
          <h3>{{ $local[$root.lang].home.sectionList[5] }}</h3>
          <div class="star flex-col flex-center">
            <img src="../../assets/home/yx.png" class="headerImg" />
            <div class="name">{{ star.name }}</div>
            <div class="time">{{ star.insertTime }}</div>
            <div class="flex flex-center">
              <div class="more1">
                <router-link to="/mzzx">{{
                  $local[$root.lang].more
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mzzx-item">
          <h3>{{ $local[$root.lang].home.sectionList[6] }}&lt;1:5&gt;</h3>
          <div class="ssb">
            幼儿园教职工包括专任教师、保育员、卫生保健人员、行政人员、教辅人员、工勤人员。幼儿园保教人员包括专任教师和保育员。全日制幼儿园每班配备2名专任教师和1名保育员，或配备3名专任教师
          </div>
          <div class="flex flex-center">
            <div class="more1">
              <router-link to="/jsfc">{{
                $local[$root.lang].more
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getArt, getStar } from "@/api/index.js";
export default {
  data() {
    return {
      list: [],
      star: [],
    };
  },
  async mounted() {
    const json = await getArt({ page: 1, limit: 4 });
    this.list = json.list;
    const stars = await getStar({ page: 1, limit: 1 });
    this.star = stars.list[0];
    console.log(json);
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
@media only screen and (min-width: 880px) {
  .section5 {
    background: #fff;
    .desc {
      margin-bottom: 20px;
      word-break: break-all;
    }
    .mobile {
      display: none;
    }
    .container {
      background: #ffffff;
      justify-content: space-between;
      .yskj {
        width: 50%;
        text-align: left;
        padding-right: 4%;
        border-right: 2px dashed darkgray;
        .more1 {
          width: 100px;
          height: 30px;
          border-radius: 30px;
          background: @primary-color;
          color: #fff;
          justify-content: center;
        }
      }
      .mzzx {
        width: 50%;
        text-align: left;
        padding-left: 7%;
        .mzzx-item {
          width: 100%;
          height: 150px;
          margin-top: 20px;
          background: rgb(244, 249, 253);
          border-top-left-radius: 150px;
          border-bottom-left-radius: 150px;
          .headerImg {
            width: 150px;
            height: 150px;
          }
          .info {
            padding: 20px 40px 20px 26px;
            .info-name {
              height: 40px;
              border-bottom: 1px solid darkgray;
            }
            .showmore {
              height: 70px;
              .more1 {
                width: 100px;
                height: 30px;
                border-radius: 30px;
                background: @primary-color;
                color: #fff;
                justify-content: center;
              }
            }
          }
        }
        .ssb {
          margin-top: 60px;
        }
        .ssb-item {
          .showmore {
            margin-top: 40px;
            .more1 {
              width: 100px;
              height: 30px;
              border-radius: 30px;
              background: @primary-color;
              color: #fff;
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 880px) {
  .section5 {
    background: #fff;
    .desc {
      margin-bottom: 20px;
      word-break: break-all;
    }
    .pc {
      display: none;
    }
    .container {
      background: rgb(244, 249, 253);
      justify-content: center;
      .yskj {
        width: 100%;
        text-align: left;
        padding: 30px 12px 20px 12px;
        .yskj-item {
          border-radius: 6px;
          overflow: hidden;
          background: #fff;
          width: 49%;
          padding: 6px;
          margin-bottom: 10px;
        }
        .more1 {
          width: 100px;
          height: 30px;
          border: 1px solid @primary-color;
          color: @primary-color;
          margin: 0 auto;
          margin-top: 10px;
        }
      }
      .mzzx {
        width: 100%;
        text-align: left;
        background: #fff;
        .mzzx-item {
          position: relative;
          width: 50%;
          margin-top: 20px;
          padding: 0 20px;
          &:first-child {
            padding-right: 36px;
            ::after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              width: 1px;
              height: 100%;
              border-right: 1px dashed darkgray;
            }
          }
          &:last-child {
            padding-left: 30px;
          }
          .star {
            text-align: center;
            background: rgb(244, 249, 253);
            padding: 10px 6px 25px 6px;
            .headerImg {
              width: 100px;
              height: 100px;
              object-fit: cover;
            }
            .name {
              font-weight: 500;
              font-size: 16px;
              line-height: 1.8;
              border-bottom: 1px solid darkgray;
            }
            .time {
              font-size: 12px;
              line-height: 1.8;
            }
          }
          .ssb {
            font-size: 12px;
          }
          .more1 {
            width: 100px;
            height: 28px;
            border-radius: 8px;
            font-size: 12px;
            margin-top: 20px;
            background: @primary-color;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
