<template>
<div class="checkout">
  <div class="container">
    <div class="checkout-left">
      <div class="checkout-payment">
        <SectionHead
          index="1"
          :copy="$tm('demo.checkout.payment')"
        />
        <div class="payment-express">
          {{ $t('demo.checkout.payment.express') }}
        </div>
        <div class="payment-options">
          <div class="payment-solomon" @click="showPlugin('solomon')">
            <img :src="SolomonImg">
            {{ $t('plugin.solomon.label') }}
          </div>
          <div class="payment-paypal" @click="showPlugin('paypal')">
            <img :src="PaypalImg">
          </div>
          <div class="payment-card" @click="showPlugin('card')">
            {{ $t('demo.checkout.payment.card') }}
          </div>
        </div>
      </div>
      <SectionHead
        index="2"
        :copy="$tm('demo.checkout.billing')"
      />
      <SectionHead
        index="3"
        :copy="$tm('demo.checkout.shipping')"
      />
    </div>
    <div class="checkout-right">
      <Cart />
    </div>
  </div>
  <SlmPlugin
    :show="!!paymentType"
    :initialType="paymentType"
    @cancel="paymentType = null"
  />
</div>
</template>

<script>
import PaypalImg from '/src/assets/img/paypal.png';
import SolomonImg from '/src/assets/img/solomon_white.png';

export default {
  name: 'checkout',
  data() {
    return {
      PaypalImg,
      SolomonImg,
      paymentType: null,
    };
  },
  methods: {
    showPlugin(type) {
      this.paymentType = type;
    },
  },
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.checkout {
  background-color: $bg-light;
  .container {
    padding-top: 24px;
    display: flex;
  }
  .checkout-left {
    flex-grow: 1;
    .checkout-payment {
      .checkout-express {
        @mixin title 14px;
        color: $text-dark;
      }
      .payment-options {
        display: flex;
        > div {
          height: 38px;
          width: 220px;
          @mixin flex-center;
          border-radius: 4px;
          cursor: pointer;
          &:not(:last-child) {
            margin-right: 16px;
          }
        }
        .payment-solomon {
          background-color: #141414;
          @mixin title 15px;
          letter-spacing: 1.4px;
          > img {
            height: 22px;
            margin-right: 8px;
          }
        }
        .payment-paypal {
          background-color: $paypal-light;
          > img {
            height: 20px;
            margin-top: 2px;
          }
        }
        .payment-card {
          background-color: $main-blue;
          color: white;
          @mixin title 16px;
        }
      }
    }
  }
  .checkout-right {
    margin-left: 16px;
  }
  @media (max-width: 568px) {
    .container {
      flex-direction: column-reverse;
      padding: 0;
      .checkout-right {
        margin-left: 0;
      }
      .checkout-left {
        padding: 0 20px;
      }
    }
  }
}
</style>
