<template>
<div class="footer-wrap">
  <div class="footer container">
    <div class="footer-content">
      <div class="footer-left">
        <div class="solomon-logo">
          <img :src="SolomonImg">
          <div>{{ $t('demo.footer.solomon') }}</div>
        </div>
        <div class="solomon-demo">
          {{ $t('demo.footer.text') }}
        </div>
        <div class="solomon-copyright">
          {{ $t('demo.footer.copyright') }}
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-link">
          <a target="_blank" href="https://sale.solomondefi.com">
            {{ $t('demo.footer.sale') }}
          </a>
        </div>
        <div class="footer-link">
          <a target="_blank" href="https://medium.com/@solomondefi">
            {{ $t('demo.footer.blog') }}
          </a>
        </div>
        <div class="footer-link">
          <a target="_blank" href="https://facebook.com/solomondefi">
            {{ $t('demo.footer.facebook') }}
          </a>
        </div>
        <div class="footer-link">
          <a target="_blank" href="https://twitter.com/solomondefi">
            {{ $t('demo.footer.twitter') }}
          </a>
        </div>
        <div class="footer-link">
          <a target="_blank" href="https://t.me/solomondefiproject">
            {{ $t('demo.footer.telegram') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SolomonImg from '/src/assets/img/solomon.png';

export default {
  name: 'demo-footer',
  data() {
    return {
      SolomonImg,
    };
  },
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.footer-wrap {
  background-color: $bg-light;
  padding-top: 64px;
}
.footer-content {
  border-top: 1px solid $border-med;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
}
.footer {
  color: $text-dark;
  .footer-left {
    max-width: 390px;
    padding-right: 30px;
    @mixin text-regular 14px;
    .solomon-logo {
      @mixin title 20px;
      display: flex;
      align-items: center;
      img {
        width: 44px;
        height: 44px;
        margin-right: 10px;
      }
    }
    .solomon-demo {
      margin-top: 8px;
    }
    .solomon-copyright {
      margin-top: 8px;
      color: $text-dark3;
    }
  }
  .footer-right {
    display: flex;
    > div:not(:last-child) {
      margin-right: 16px;
    }
    a {
      @mixin title-medium 13px;
      text-decoration: none;
      color: $text-dark3;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 568px) {
    .footer-content {
      flex-direction: column;
      .footer-left {
        padding-right: 0;
        text-align: center;
        .solomon-logo {
          justify-content: center;
        }
      }
      .footer-right {
        flex-wrap: wrap;
        flex-direction: row;
        > div {
          width: 30%;
          margin: 16px 0 0 0;
          text-align: center;
          flex-grow: 1;
        }
      }
    }
  }
}
</style>
