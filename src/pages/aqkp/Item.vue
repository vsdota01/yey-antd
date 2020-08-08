<template>
  <div class="jylist flex">
    <div class="jyt">
      <img :src="$fullImgPath(item.imgpath)" alt="" />
    </div>
    <div class="jyjs flex flex1 flex-col">
      <div class="ktsl flex flex-js-end">
        <img src="../../assets/home/kt1.png" alt="" />
      </div>
      <div class="jstit">
        <div class="title">{{ item.title }}</div>
        <div class="time">
          {{ item.insertTime }}
        </div>
        <div class="text">
          {{ item.introduction }}
        </div>
        <div class="more" @click="toDetail">
          {{ $local[$root.lang].detail }} >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    toDetail() {
      const id = this.item.id;
      this.$router.push({
        path: "/article",
        query: {
          id,
          type: "getSecurity",
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
.jylist {
  overflow: hidden;
  background: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 20px;
  width: 100%;
  @media only screen and (min-width: 880px) {
    .jyt {
      width: 360px;
      img {
        width: 100%;
        height: 360px;
        border-radius: 20px;
      }
    }
    .jyjs {
      position: relative;
      margin-left: 40px;
      .ktsl {
        width: 100%;
        margin-top: 20px;
        img {
          width: 120px;
        }
      }
      .jstit {
        overflow: hidden;
        padding-bottom: 10px;
        width: 100%;
        .title {
          font-size: 16px;
        }
        .time {
          font-size: 13px;
          margin: 10px 0 15px 0;
        }
        .text {
          font-size: 12px;
          padding-right: 40px;
        }
      }
      .more {
        cursor: pointer;
        border-radius: 10px;
        font-size: 12px;
        margin-top: 25px;
        color: @primary-color;
      }
    }
  }
  @media only screen and (max-width: 880px) {
    .jyt {
      width: 120px;
      img {
        width: 120px;
        height: 120px;
        border-radius: 20px;
      }
    }
    .jyjs {
      position: relative;
      margin-left: 10px;
      .ktsl {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        img {
          width: 40px;
        }
      }
      .jstit {
        overflow: hidden;
        padding-bottom: 10px;
        width: 100%;
        .title {
          font-size: 16px;
        }
        .time {
          font-size: 13px;
          margin: 4px 0 5px 0;
        }
        .text {
          font-size: 12px;
          padding-right: 10px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .more {
        cursor: pointer;
        border-radius: 10px;
        font-size: 12px;
        margin-top: 4px;
        color: @primary-color;
      }
    }
  }
}
</style>
