<template>
  <div class="flex flex-col jsfc-item">
    <div class="headImg" @click="toDetail">
      <img :src="$fullImgPath(item.imgpath)" />
    </div>
    <div class="js-name">{{ item.name }} {{ item.job }}</div>
    <div>
      <img src="../../assets/home/js2.png" alt="" width="100%" />
    </div>
    <div class="ryjs ellipsis-3">
      {{ item.motto }}
    </div>
  </div>
</template>
<script>
export default {
  name: "jsfcItem",
  props: ["item"],
  methods: {
    toDetail() {
      const id = this.item.id;
      this.$router.push({
        path: "/article",
        query: {
          id,
          type: "getTeacher",
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
.jsfc-item {
  width: 260px;
  padding: 20px 30px;
  .headImg {
    text-align: center;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 150px;
    }
  }
  .js-name {
    margin: 20px 0px;
    text-align: center;
    color: @primary-color;
  }
  .ryjs {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
