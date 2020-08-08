import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/base.less";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/styles/theme-file.less";
import "./styles/icon/iconfont.css";
import local from "@/local";
Vue.prototype.$local = local;
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$fullImgPath = function(path) {
  return process.env.VUE_APP_URL + path;
};
new Vue({
  data: {
    menuIndex: Number(localStorage.getItem("menuIndex")) || 0,
    lang: localStorage.getItem("lang") || "CN",
    isRouterAlive: true,
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
