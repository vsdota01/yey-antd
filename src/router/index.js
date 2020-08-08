import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home/index.vue"),
      meta: {
        title: "昆山加拿大国际学校",
      },
    }, // 斜杠代表根路径  ”component:Home“ 表示点击 "主页" 的时候会展示Home组件的内容
    // 联系我们
    {
      path: "/article",
      name: "article",
      component: () => import("@/pages/article/index.vue"),
      meta: {
        title: "文章详情",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/about/index.vue"),
      meta: {
        title: "走进幼儿部",
      },
    },
    {
      path: "/jsfclist",
      name: "jsfclist",
      component: () => import("@/pages/jsfc/index.vue"),
      meta: {
        title: "教师风采",
      },
    },
    {
      path: "/jxjylist",
      name: "jxjylist",
      component: () => import("@/pages/jxjy/index.vue"),
      meta: {
        title: "教学教研",
      },
    },
    {
      path: "/yebjlist",
      name: "yebjlist",
      component: () => import("@/pages/yebj/index.vue"),
      meta: {
        title: "幼儿保健",
      },
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/pages/news/index.vue"),
      meta: {
        title: "新闻动态",
      },
    },
    {
      path: "/jyhd",
      name: "jyhd",
      component: () => import("@/pages/jyhd/index.vue"),
      meta: {
        title: "家园互动",
      },
    },
    {
      path: "/aqkplist",
      name: "aqkplist",
      component: () => import("@/pages/aqkp/index.vue"),
      meta: {
        title: "安全科普",
      },
    },
    {
      path: "/yskjlist",
      name: "yskjlist",
      component: () => import("@/pages/yskj/index.vue"),
      meta: {
        title: "艺术空间",
      },
    },
    {
      path: "/mzzx",
      name: "mzzx",
      component: () => import("@/pages/mzzx/index.vue"),
      meta: {
        title: "每周之星",
      },
    },
    {
      path: "/yzsp",
      name: "yzsp",
      component: () => import("@/pages/yzsp/index.vue"),
      meta: {
        title: "一周食谱",
      },
    },
    {
      path: "/zssm",
      name: "zssm",
      component: () => import("@/pages/zssm/index.vue"),
      meta: {
        title: "招生说明",
      },
    },
    {
      path: "/lxwm",
      name: "lxwm",
      component: () => import("@/pages/lxwm/index.vue"),
      meta: {
        title: "联系我们",
      },
    },
  ],
});
//用于设置浏览器标签的title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
