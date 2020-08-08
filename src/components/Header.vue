<template>
  <header class="header flex flex-ai-center flex-js-betw" id="header">
    <div class="logo">
      <img src="../assets/images/logo.png" class="pclogo" />
    </div>
    <div class="compy">
      {{ $local[$root.lang].company }}
    </div>
    <div class="local">
      <span @click="changeLang('EN')">English</span> |
      <span @click="changeLang('CN')">中文</span>
    </div>
  </header>
</template>
<script>
//顶部公共header
export default {
  methods: {
    //中英文切换
    changeLang(str) {
      this.$root.lang = str;
      localStorage.setItem("lang", str);
      this.reload();
    },
    //app组件刷新
    reload() {
      this.$root.isRouterAlive = false;
      this.$nextTick(() => (this.$root.isRouterAlive = true));
    },
  },
};
</script>
<style lang="less" scoped>
@import "../styles/theme-file.less";
#header {
  width: 100%;
  height: 90px;
  background: @primary-color;
  padding: 0 20px;
  color: #ffffff;
  .logo {
    width: 135px;
  }
  @media only screen and (min-width: 880px) {
    .compy {
      font-size: 36px;
      font-weight: 800;
    }
  }
  @media only screen and (max-width: 880px) {
    .compy {
      font-size: 36px;
      font-weight: 800;
      display: none;
    }
  }
  @media only screen and (min-width: 880px) {
    .local {
      width: 100px;
    }
  }
  @media only screen and (max-width: 880px) {
    .local {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
}
</style>
