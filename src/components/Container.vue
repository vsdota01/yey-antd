<template>
  <div id="container">
    <div class="my-container">
      <page-header />
      <slot></slot>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
//内容主体公共样式组件
export default {
  name: "Container",
  components: {
    "page-header": PageHeader,
  },
};
</script>
<style lang="less" scoped>
#container {
  width: 100%;
  background: #f9f9f9;
  .my-container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    background: #fff;
    padding: 30px;
  }
}
</style>
