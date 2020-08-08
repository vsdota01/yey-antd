<template>
  <div id="jxjy-detail">
    <Container>
      <div class="content">
        <article v-html="article"></article>
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import { getRecruit } from "@/api/index.js";
export default {
  data() {
    return {
      article: "",
    };
  },
  components: {
    Container,
  },
  async mounted() {
    this.article = await getRecruit();
  },
};
</script>
<style lang="less" scoped>
#jxjy-detail {
  @media only screen and (min-width: 880px) {
    .content {
      padding: 30px 30px 100px 30px;
    }
  }
  @media only screen and (max-width: 880px) {
    .content {
      padding: 10px 0 40px 0;
    }
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid darkgray;
    p {
      margin: 30px 0;
    }
    h2 {
      font-size: 20px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
    }
    h5 {
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 10px;
    }
    .datail_img {
      img {
        width: 50%;
        padding: 2px;
      }
    }
  }
  .detail_foot {
    margin: 20px 0 50px 0;
    ul {
      float: left;
      li {
        font-size: 12px;
        line-height: 20px;
      }
    }

    .back {
      font-size: 12px;
      line-height: 16px;
      margin-left: 20px;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(../../assets/home/icon.png) no-repeat scroll top left;
      }
    }
  }
}
</style>
