<template>
  <div id="menu">
    <!--pc菜单-->
    <div class="menu-pc flex flex-ai-center">
      <div
        class="menu-pc-item"
        :class="[active === item.index ? 'active' : '']"
        v-for="item in $local[$root.lang].menu"
        :key="item.index"
        @click="change(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <!--mobile菜单-->
    <div class="menu-mobile">
      <a-button type="primary" @click="showDrawer">
        <a-icon :type="visible ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-drawer
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
        width="164"
      >
        <a-tabs
          :default-active-key="active"
          :tab-position="tabPosition"
          @change="callback"
        >
          <a-tab-pane
            :tab="item.name"
            v-for="item in $local[$root.lang].menu"
            :key="item.index"
          />
        </a-tabs>
      </a-drawer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: this.$root.menuIndex, //当前菜单
      tabPosition: "right", //mobile菜单弹出方式
      visible: false,
    };
  },
  methods: {
    //pc菜单切换
    change(item) {
      this.active = item.index;
      this.$root.menuIndex = item.index;
      localStorage.setItem("menuIndex", item.index);
      this.$router.push({ path: item.path, query: item.query });
    },
    //手机菜单切换
    callback(index) {
      this.active = index;
      this.$root.menuIndex = index;
      localStorage.setItem("menuIndex", index);
      this.$router.push({
        path: this.$local[this.$root.lang].menu[index].path,
        query: this.$local[this.$root.lang].menu[index].query,
      });
    },
    afterVisibleChange(val) {},
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
  watch:{
    "$root.menuIndex"(newVal){
      this.active = newVal;
      localStorage.setItem("menuIndex",newVal);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../styles/theme-file.less";
#menu {
  width: 100%;
  background: #ffffff;
  font-size: 14px;
  cursor: pointer;
  color: @primary-color;
  text-align: center;
  margin: 0 auto;
  @media only screen and (min-width: 880px) {
    .menu-pc {
      width: 1100px;
      height: 50px;
      margin: 0 auto;
      .menu-pc-item {
        width: 100px;
        &.active {
          color: red;
        }
      }
    }
  }
  @media only screen and (max-width: 880px) {
    .menu-pc {
      display: none;
    }
  }
  @media only screen and (min-width: 880px) {
    .menu-mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 880px) {
    .menu-mobile {
      position: absolute;
      right: 20px;
      top: 46px;
    }
  }
}
</style>
