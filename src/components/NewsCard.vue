<template>
  <div class="xwdt-item flex">
    <img :src="$fullImgPath(item.imgpath)" />
    <div class="xwdt-item-content">
      <div class="xwdt-item-title">
        <div>{{ item.title }}</div>
        <div class="time">{{ item.insertTime }}</div>
      </div>
      <div class="content-info ellipsis-5">
        {{ item.introduction }}
      </div>
      <div class="detail" @click="goLink">
        了解详情>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "type"],
  methods: {
    goLink() {
      const id = this.item.id;
      this.$router.push({
        path: "/article",
        query: {
          id,
          type: this.type ? this.type : "getNews",
          tabIndex: this.$route.query.tabIndex,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../styles/theme-file.less";
.ellipsis-5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
@media only screen and (min-width: 880px) {
  .xwdt-item {
    width: 32%;
    flex-direction: column;
    background: rgb(246, 250, 254);
    border-radius: 12px;
    img {
      height: 200px;
    }
    .xwdt-item-content {
      padding: 20px;
      flex: 1;
      .xwdt-item-title {
        display: flex;
        justify-content: space-between;
      }
      .content-info {
        text-align: left;
        word-break: break-all;
      }
      .detail {
        text-align: left;
        color: @primary-color;
        margin-top: 20px;
      }
    }
  }
}
@media only screen and (max-width: 880px) {
  .xwdt-item {
    width: 100%;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 0;
    border-bottom: 1px solid darkgray;
    flex-direction: row-reverse;
    img {
      width: 120px;
      height: 100px;
      object-fit: cover;
      border-radius: 12px;
    }
    .xwdt-item-content {
      padding: 20px 40px 20px 0;
      flex: 1;
      .time {
        margin-top: 6px;
      }
      .content-info {
        text-align: left;
        word-break: break-all;
      }
      .detail {
        text-align: left;
        color: @primary-color;
        margin-top: 20px;
      }
    }
  }
}
.xwdt-item {
  overflow: hidden;
  margin-bottom: 20px;
  &:hover {
    background: @primary-color;
    color: #fff;
    .xwdt-item-content {
      .detail {
        cursor: pointer;
        color: #fff;
      }
    }
  }
  .xwdt-item-title {
    font-size: 16px;
    height: 44px;
    line-height: 16px;
    text-align: left;
    .time {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>
