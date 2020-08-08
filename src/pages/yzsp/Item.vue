<template>
  <div class="yskjitem flex" @click="toDetail">
    <div class="yskjitem-img"><img :src="$fullImgPath(item.imgpath)" /></div>
    <div class="model flex flex-center">{{ item.title }}</div>
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
        query: { id, type: "getArt" },
        title: this.item.title,
        date: this.item.insertTime,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.yskjitem {
  width: 270px;
  height: 280px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  .yskjitem-img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .model {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100px;
    background: rgba(25, 120, 199, 0.65);
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
  }
}
</style>
