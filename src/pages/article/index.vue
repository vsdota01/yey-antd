<template>
  <div id="jxjy-detail">
    <Container>
      <div class="content">
        <h2>{{ article.title }}</h2>
        <h5>{{ article.insertTime }}</h5>
        <article v-html="article.content"></article>
      </div>
      <div class="detail_foot flex flex-ai-start flex-js-betw">
        <div>
          <div v-if="preArticle.id" @click="toPre">
            {{ $local[$root.lang].preArticle }}{{ preArticle.title }}
          </div>
          <div v-else>
            {{ $local[$root.lang].preArticle }}{{ $local[$root.lang].none }}
          </div>
          <div v-if="nextArticle.id" @click="toNext">
            {{ $local[$root.lang].nextArticle }}{{ nextArticle.title }}
          </div>
          <div v-else>
            {{ $local[$root.lang].nextArticle }}{{ $local[$root.lang].none }}
          </div>
        </div>
        <div class="back" @click="fBackList">
          <span></span>{{ $local[$root.lang].back }}
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import { getArticleById } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      article: {},
      preArticle: {},
      nextArticle: {},
    };
  },
  methods: {
    toPre() {
      const type = this.$route.query.type;
      let id = this.preArticle.id;
      this.$router.push({
        path: "/article",
        query: { id, type, tabIndex: this.$route.query.tabIndex },
      });
    },
    toNext() {
      const type = this.$route.query.type;
      let id = this.nextArticle.id;
      this.$router.push({
        path: "/article",
        query: { id, type, tabIndex: this.$route.query.tabIndex },
      });
    },
    async getData(id) {
      const type = this.$route.query.type;
      const resp = await getArticleById({ params: { id }, type });
      if (typeof resp === "object") {
        this.article = resp.currentList || {};
        this.preArticle = resp.backList || {};
        this.nextArticle = resp.nextList || {};
      } else {
        this.article = {
          content: resp,
        };
      }
    },
    fBackList() {
      history.back();
    },
  },
  components: {
    Container,
  },
  mounted() {
    let id = this.$route.query.id;
    this.getData(id);
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
    cursor: pointer;
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
