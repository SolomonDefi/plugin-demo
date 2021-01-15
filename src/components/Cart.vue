<template>
<div class="cart-wrap">
  <div v-if="cartItems.length" class="cart-products">
    <div
      v-for="item in cartItems"
      :key="item.id"
      class="cart-product"
    >
      <div class="cart-quantity-wrap">
        <div class="cart-update" @click="increment(item)">
          <img :src="IcPlus">
        </div>
        <div class="cart-quantity">
          {{ item.quantity }}
        </div>
        <div class="cart-update" @click="decrement(item)">
          <transition name="delete">
            <img v-if="item.quantity === 1" class="cart-delete" :src="IcPlus">
            <img v-else class="cart-minus" :src="IcMinus">
          </transition>
        </div>
      </div>
      <div
        class="cart-image"
        :style="{ 'background-image': `url(${item.image})` }"
      />
      <div class="cart-title-wrap">
        <div class="cart-title">
          {{ item.name }}
        </div>
        <div class="cart-variant">
          {{ item.variant }}
        </div>
      </div>
      <div class="cart-size-wrap">
        <div class="cart-size-text">
          {{ $t('demo.cart.size') }}
        </div>
        <div class="cart-size">
          {{ item.size }}
        </div>
        <div class="cart-item-price" v-html="fromCents(item.price * item.quantity)" />
      </div>
    </div>
  </div>
  <div v-else class="cart-empty">
    {{ $t('demo.cart.empty') }}
  </div>
  <div class="cart-checkout-wrap">
    <div class="cart-checkout-info">
      <div class="cart-delivery">
        {{ $t('demo.cart.delivery') }}
      </div>
      <div class="cart-more-info">
        {{ $t('demo.cart.info') }}
      </div>
      <div class="cart-total-text">
        {{ $t('demo.cart.total') }}
      </div>
      <div class="cart-total" v-html="total" />
    </div>
    <div v-if="showButtons" class="cart-buttons">
      <div class="cart-continue" @click="$emit('hide')">
        {{ $t('demo.cart.continue') }}
      </div>
      <div class="cart-checkout" @click="goCheckout">
        {{ $t('demo.cart.checkout') }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import cartStore from '/src/store';
import IcPlus from '/src/assets/img/ic_plus.png';
import IcMinus from '/src/assets/img/ic_minus.png';

export default {
  name: 'cart',
  emits: ['hide'],
  props: {
    showButtons: Boolean,
  },
  data() {
    return {
      IcPlus,
      IcMinus,
    };
  },
  computed: {
    total() {
      return this.fromCents(this.store.totalPrice.value);
    },
    store() {
      return cartStore();
    },
    cartItems() {
      return this.store.items.value;
    },
  },
  methods: {
    fromCents(cents) {
      const dollars = cents / 100;
      return `<span>$</span>${dollars.toLocaleString()}`;
    },
    increment(cartItem) {
      this.store.setQuantity(cartItem.id, cartItem.quantity + 1);
    },
    decrement(cartItem) {
      this.store.setQuantity(cartItem.id, cartItem.quantity - 1);
    },
    goCheckout() {
      this.$router.push({ name: 'checkout' });
      this.$emit('hide');
    }
  },
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.delete-enter-active,
.delete-leave-active {
  transition: opacity 0.3s linear, transform 0.3s linear;
}
.delete-enter-from,
.delete-leave-to {
  opacity: 0;
  &.cart-delete {
    transform: rotate(0deg);
  }
}

.cart-wrap {
  width: 480px;
  background: white;
  border: 1px solid $border-med;
  .cart-empty {
    @mixin title-semibold 20px;
    @mixin flex-center;
    color: $text-dark;
    padding: 24px 0;
  }
  .cart-products {
    padding: 8px 0 16px;
  }
  .cart-product {
    display: flex;
    color: $text-dark;
    padding-right: 16px;
    margin-top: 16px;
    .cart-quantity-wrap {
      @mixin flex-center-col;
      width: 40px;
      text-align: center;
      .cart-quantity {
        @mixin title 14px;
        margin: 4px 0;
      }
      .cart-update {
        @mixin flex-center;
        height: 16px;
        cursor: pointer;
        img {
          width: 10px;
        }
        .cart-delete {
          transform: rotate(45deg);
        }
      }
    }
    .cart-image {
      width: 80px;
      height: 100px;
      margin-right: 16px;
      background-position: center;
      background-size: 100% auto;
      background-repeat: no-repeat;
    }
    .cart-title-wrap {
      width: 180px;
      margin-right: 24px;
      @mixin flex-center-col;
      align-items: flex-start;
      .cart-title {
        @mixin title-semibold 19px;
      }
      .cart-variant {
        @mixin text-italic 16px;
      }
    }
    .cart-size-wrap {
      flex-grow: 1;
      @mixin flex-center;
      .cart-size {
        @mixin product-size;
        margin-left: 8px;
      }
      .cart-item-price {
        @mixin title-regular 17px;
        margin-left: auto;
      }
    }
  }
  .cart-checkout-wrap {
    border-top: 1px solid #eee;
    box-sizing: border-box;
    padding: 24px 16px 24px 32px;
    color: $text-dark3;
    .cart-checkout-info {
      display: flex;
      align-items: center;
      .cart-more-info {
        color: $main-blue;
        margin-left: 8px;
      }
      .cart-total-text {
        margin-left: auto;
        @mixin title-regular 14px;
        align-self: center;
      }
      .cart-total {
        @mixin title 22px;
        margin-left: 8px;
        > span {
          @mixin title-regular 22px;
        }
      }
    }
  }
  .cart-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    > div {
      @mixin flex-center;
      height: 34px;
      @mixin title 10px;
      letter-spacing: 1.8px;
      padding: 0 24px;
      border-radius: 17px;
      cursor: pointer;
    }
    .cart-continue {
      color: $text-dark;
      border: 1px solid $border-med;
    }
    .cart-checkout {
      color: white;
      background: $main-blue;
    }
  }
}
</style>
