<template>
  <div id="footer">
    <footer class="footer">
      <div class="container flex flex-js-betw flex-ai-center flex-wrap">
        <div class="foot_logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </div>
        <dl class="gsxx">
          <dt>{{ $local[$root.lang].company }}</dt>
          <dd>
            {{ $local[$root.lang].phone }} &nbsp; {{ $local[$root.lang].tel }}
          </dd>
          <dd>{{ $local[$root.lang].address }}</dd>
        </dl>
        <dl class="wx">
          <img src="../assets/images/weixin.png" alt="二维码" />
        </dl>
      </div>
      <div class="copyright">
        {{ $local[$root.lang].copyright }}
      </div>
    </footer>
  </div>
</template>
<script>
//底部公共footer
export default {
  name: "Footer",
};
</script>
<style lang="less" scoped>
@import "../styles/theme-file.less";
#footer {
  width: 100%;
  background: @primary-color;
  padding: 50px 0;
  @media only screen and (min-width: 880px) {
    .footer {
      max-width: 1000px;
      margin: 0 auto;
      .foot_logo {
        width: 25%;
      }
      .gsxx {
        width: 50%;
        padding: 0 12px;
        text-align: center;
        dt {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        dd {
          font-size: 14px;
          line-height: 200%;
        }
      }
      .wx {
        width: 25%;
        img {
          width: 130px;
        }
      }
    }
  }
  @media only screen and (max-width: 880px) {
    .footer {
      max-width: 100%;
      .foot_logo {
        display: none;
      }
      .gsxx {
        width: 100%;
        padding: 0 12px;
        text-align: center;
        dt {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        dd {
          font-size: 14px;
          line-height: 200%;
        }
      }
      .wx {
        width: 100%;
        text-align: center;
        img {
          width: 130px;
          height: 130px;
          object-fit: cover;
        }
      }
    }
  }
  .copyright {
    font-size: 12px;
    text-align: center;
  }
}
</style>
