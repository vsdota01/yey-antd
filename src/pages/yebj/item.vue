<template>
  <div class="jsjs">
    <dl>
      <dt>{{ item.title }}</dt>
      <dd>
        {{ item.introduction }}
      </dd>
      <div class="more" @click="toDetail">
        MORE >
      </div>
    </dl>
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
          type: "getHealth",
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
.jsjs {
  width: 280px;
  height: 400px;
  background-image: url("../../assets/home/bjbg.png");
  background-size: cover;
  margin: 15px;
  dl {
    width: 220px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 100px;
    dt {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    dd {
      line-height: 180%;
      font-size: 12px;
      margin-top: 20px;
      height: 155px;
      overflow: hidden;
    }
  }
  .more {
    background: @primary-color;
    width: 100px;
    height: 30px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    margin: 20px auto;
    a {
      color: white;
    }
  }
}
</style>
