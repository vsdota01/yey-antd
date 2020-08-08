<template>
  <div id="lxwm-detail">
    <Container>
      <div class="flex flex-js-betw lxwm-detail flex-wrap">
        <div class="flex flex-ai-center lxwm-item">
          <div class="tb">
            <span class="iconfont icon-dizhi"></span>
          </div>
          <div class="wz">中国江苏省昆山市<br />祖冲之路1799号</div>
        </div>
        <div class="flex flex-ai-center lxwm-item">
          <div class="tb">
            <span class="iconfont icon-dianhua"></span>
          </div>
          <div class="wz">
            <div>0512-57606969</div>
            <div>153588388850</div>
          </div>
        </div>
        <div class="flex flex-ai-center lxwm-item">
          <div class="tb">
            <span class="iconfont icon-youjian"></span>
          </div>
          <div class="wz">
            1218545121.@163.COM
          </div>
        </div>
      </div>
      <div class="map">
        <iframe src="https://j.map.baidu.com/12/quC"></iframe>
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
export default {
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Container,
  },
};
</script>
<style lang="less" scoped>
.lxwm-detail {
  padding: 0 30px;
  .lxwm-item {
    max-width: 250px;
    margin-bottom: 20px;
  }
  .tb {
    width: 40px;
    font-size: 20px;
    font-weight: 600;
  }
  .wz {
    margin-left: 20px;
  }
}
.map {
  width: 100%;
  height: 450px;
  margin-top: 30px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
