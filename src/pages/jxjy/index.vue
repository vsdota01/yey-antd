<template>
  <div id="jxjy">
    <Container>
      <div class="jxjylist">
        <div
          class="jxjylist-item flex"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="jyt">
            <img :src="$fullImgPath(item.imgpath)" alt="" />
          </div>
          <div class="jyjs">
            <div class="jstit flex flex-js-betw">
              <div>{{ item.title }}</div>
              <div>
                {{ item.insertTime }}
              </div>
            </div>
            <p>
              {{ item.introduction }}
            </p>
            <div class="more flex flex-center" @click="toDetail(item)">
              MORE >
            </div>
          </div>
        </div>
      </div>
      <a-pagination
        v-model="page"
        :total="total"
        show-less-items
        hideOnSinglePage
        style="text-align:center"
        @change="change"
      />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import { getTeach } from "@/api/index.js";
//教师成长
export default {
  data() {
    return {
      page: 1,
      limit: 9,
      total: 0,
      list: [],
    };
  },
  components: {
    Container,
  },
  async mounted() {
    this.fGetData();
  },
  methods: {
    toDetail(item) {
      const id = item.id;
      this.$router.push({
        path: "/article",
        query: {
          id,
          type: "getTeach",
          tabIndex: this.$route.query.tabIndex,
        },
      });
    },
    change(page) {
      this.page = page;
      this.fGetData();
    },
    async fGetData() {
      const tab = this.$route.query.tab ? this.$route.query.tab : "教师成长";
      const resp = await getTeach({
        page: this.page,
        limit: this.limit,
        type: tab,
      });
      this.list = resp.list;
      this.total = resp.total;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/theme-file.less";
@media only screen and (min-width: 880px) {
  .jxjylist-item {
    padding: 30px;
    overflow: hidden;
    .jyt {
      width: 300px;
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .jyjs {
      width: 500px;
      margin-left: 40px;
      .jstit {
        overflow: hidden;
        border-bottom: 2px solid darkgray;
        padding-bottom: 20px;
        dt {
          color: @primary-color;
          font-size: 18px;
          font-weight: 600;
        }
      }
      p {
        line-height: 180%;
        margin-top: 20px;
        font-size: 14px;
      }
      .more {
        background: @primary-color;
        width: 100px;
        height: 30px;
        color: white;
        cursor: pointer;
        border-radius: 30px;
        font-size: 12px;
        margin-top: 20px;
        a {
          color: white;
        }
      }
    }
  }
}
@media only screen and (max-width: 880px) {
  .jxjylist-item {
    padding: 0;
    flex-flow: wrap;
    margin-bottom: 20px;
    .jyt {
      width: 100%;
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .jyjs {
      width: 100%;
      .jstit {
        overflow: hidden;
        border-bottom: 2px solid darkgray;
        padding-bottom: 20px;
        padding-top: 10px;
        dt {
          color: @primary-color;
          font-size: 18px;
          font-weight: 600;
        }
      }
      p {
        line-height: 180%;
        margin-top: 20px;
        font-size: 14px;
      }
      .more {
        background: @primary-color;
        width: 100px;
        height: 30px;
        color: white;
        cursor: pointer;
        border-radius: 30px;
        font-size: 12px;
        margin-top: 20px;
        a {
          color: white;
        }
      }
    }
  }
}
</style>
