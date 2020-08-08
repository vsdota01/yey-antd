<template>
  <div id="app">
    <app-header></app-header>
    <app-menu></app-menu>
    <router-view
      v-if="$root.isRouterAlive"
      :key="$route.fullPath"
    ></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "app-header": Header,
    "app-menu": Menu,
    "app-footer": Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
