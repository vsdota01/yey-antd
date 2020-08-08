<template>
  <div class="mzzx">
    <div class="time">{{ item.insertTime }}</div>
    <div class="head-box">
      <img :src="$fullImgPath(item.imgpath)" class="headImg" />
      <img src="../../assets/home/a1.png" class="supImg" />
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="mwyl flex flex-center" @click="toDetail">萌娃语录></div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    toDetail() {
      const id = this.item.id;
      this.$router.push({
        path: "/article",
        query: {
          id,
          type: "getStar",
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
@media only screen and (min-width: 880px) {
  .mzzx {
    width: 220px;
    padding: 20px 0;
    text-align: center;
    .time {
      text-align: left;
      margin-bottom: 12px;
    }
    .head-box {
      position: relative;
      .headImg {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        object-fit: cover;
      }
      .supImg {
        position: absolute;
        top: 0;
        right: 30px;
        width: 35px;
        height: 35px;
        object-fit: cover;
        transform: rotate(45deg);
      }
    }
    .name {
      margin: 30px 0 15px 0;
    }
    .mwyl {
      position: relative;
      margin: 0 auto;
      width: 80px;
      height: 40px;
      color: #ffffff;
      background: @primary-color;
    }
  }
}
@media only screen and (max-width: 880px) {
  .mzzx {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 20px;
    text-align: center;
    .time {
      text-align: left;
      margin-bottom: 12px;
    }
    .head-box {
      position: relative;
      width: 220px;
      margin: 0 auto;
      .headImg {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        object-fit: cover;
      }
      .supImg {
        position: absolute;
        top: 0;
        right: 30px;
        width: 35px;
        height: 35px;
        object-fit: cover;
        transform: rotate(45deg);
      }
    }
    .name {
      margin: 30px 0 15px 0;
    }
    .mwyl {
      position: relative;
      margin: 0 auto;
      width: 80px;
      height: 40px;
      color: #ffffff;
      background: @primary-color;
    }
  }
}
</style>
