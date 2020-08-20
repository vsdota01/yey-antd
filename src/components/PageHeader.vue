<template>
  <div id="pageHeader">
    <div class="flex flex-ai-center location">
      {{ $local[$root.lang].pageHeader }}{{ location }}
    </div>
    <div class="flex flex-ai-center biaoqian">
      <div
        v-for="(item, index) in biaoqian"
        :key="index"
        :class="[active === index ? 'active' : '']"
        @click="changeTab(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="fgt">
      <img src="../assets/home/js1.png" alt="" />
    </div>
  </div>
</template>
<script>
/**
 * location：当前所在
 * biaoqian：当前位置标签
 * active：当前位置标签选中
 */
export default {
  data() {
    return {
      active: this.$route.query.tabIndex || 0,
    };
  },
  computed: {
    location() {
      try {
        if (
          this.$local[this.$root.lang].menu[this.$root.menuIndex].name ===
          "首页"
        ) {
          return this.$route.meta.title;
        }
        return this.$local[this.$root.lang].menu[this.$root.menuIndex].name;
      } catch (error) {
        return "";
      }
    },
    biaoqian() {
      try {
        console.log(
          this.$local[this.$root.lang].menu[this.$root.menuIndex].biaoqian
        );
        if (
          this.$local[this.$root.lang].menu[this.$root.menuIndex].biaoqian
            .length == 1 &&
          this.$local[this.$root.lang].menu[this.$root.menuIndex].biaoqian[0]
            .name === "首页"
        ) {
          return [{ name: this.$route.meta.title, path: this.$route.path }];
        }
        return this.$local[this.$root.lang].menu[this.$root.menuIndex].biaoqian;
      } catch (error) {
        return [];
      }
    },
  },
  methods: {
    changeTab(item, index) {
      console.log(index);
      if (item.path && item.path != this.$route.fullPath) {
        console.log("changeTab");
        this.$router.push({
          path: item.path,
          query: { ...item.query, tabIndex: index },
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../styles/theme-file.less";
#pageHeader {
  width: 100%;
  .location {
    font-size: 12px;
  }
  .biaoqian {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    @media only screen and (min-width: 880px) {
      div {
        padding: 10px 30px;
        color: @primary-color;
        cursor: pointer;
        border-radius: 10px;
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 880px) {
      div {
        padding: 4px 10px;
        color: @primary-color;
        cursor: pointer;
        border-radius: 4px;
        text-align: center;
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
  .biaoqian div.active {
    background: @primary-color;
    color: white;
  }
  .fgt {
    margin: 20px 0;
  }
}
</style>
