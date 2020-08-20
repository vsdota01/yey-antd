<template>
  <div id="yzsp">
    <Container>
      <div class="yzsp-box">
        <div class="yzsp-bg">
          <img src="../../assets/home/sp2.png" />
        </div>
        <div class="yzsp-list">
          <div class="flex flex-col">
            <div
              class="flex flex-js-betw list-item flex-ai-center"
              v-for="(item, index) in list"
              :key="index"
              @click="toDetail(item)"
            >
              <span>{{ item.title }}</span
              ><span>{{ item.insertTime }}</span>
            </div>
          </div>
        </div>
        <a-pagination
          v-model="page"
          :total="total"
          show-less-items
          style="text-align:center"
          @change="change"
        />
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import { getRecipe } from "@/api/index.js";
export default {
  data() {
    return {
      page: 1,
      limit: 10,
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
    change(page) {
      this.page = page;
      this.fGetData();
    },
    async fGetData() {
      const resp = await getRecipe({ page: this.page, limit: this.limit });
      this.list = resp.list;
      this.total = resp.total;
    },
    toDetail(item) {
      const id = item.id;
      this.$router.push({
        path: "/article",
        query: { id, type: "getRecipe" },
      });
    },
  },
  created() {
    this.$root.menuIndex = 0;
  },
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 880px) {
  .yzsp-box {
    position: relative;
    width: 100%;
    height: 650px;
    .yzsp-bg {
      position: absolute;
      width: 100%;
      z-index: 0;
      img {
        width: 100%;
      }
    }
    .yzsp-list {
      position: absolute;
      top: 80px;
      right: 80px;
      z-index: 1;
      width: 480px;
      height: 460px;
      .list-item {
        position: relative;
        height: 40px;
        border-bottom: 1px dashed darkgrey;
        cursor: pointer;
        span {
          font-size: 16px;
          &:first-child {
            padding-left: 20px;
            &::before {
              content: "";
              position: absolute;
              left: 8px;
              top: 20px;
              width: 4px;
              height: 4px;
              border-radius: 4px;
              background: #000;
            }
          }
          &:last-child {
            color: rgb(145, 145, 145);
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 880px) {
  .yzsp-box {
    position: relative;
    width: 100%;
    .yzsp-bg {
      display: none;
      width: 100%;
      z-index: 0;
      img {
        width: 100%;
      }
    }
    .yzsp-list {
      top: 80px;
      right: 80px;
      z-index: 1;
      width: 100%;
      .list-item {
        position: relative;
        height: 40px;
        border-bottom: 1px dashed darkgrey;
        cursor: pointer;
        span {
          font-size: 16px;
          &:first-child {
            padding-left: 20px;
            &::before {
              content: "";
              position: absolute;
              left: 8px;
              top: 20px;
              width: 4px;
              height: 4px;
              border-radius: 4px;
              background: #000;
            }
          }
          &:last-child {
            color: rgb(145, 145, 145);
          }
        }
      }
    }
  }
}
</style>
