<template>
<div
  class="header-cart"
  @click="show(true)"
  @click.stop
>
  <div class="header-cart-title">
    <img :src="IcCart">
    <div v-if="quantity">
      {{ $tc('demo.header_cart_items', quantity) }}
    </div>
    <div v-else>
      {{ $t('demo.header_cart') }}
    </div>
  </div>
  <transition name="header-cart">
    <Cart
      v-if="showCart"
      ref="cart"
      :showButtons="true"
      @hide="show(false)"
      @click.stop
    />
  </transition>
</div>
</template>

<script>
import cartStore from '/src/store';
import IcCart from '/src/assets/img/ic_cart.png';

const clickEventType = document.ontouchstart !== null ? 'click' : 'touchstart';

export default {
  name: 'header-cart',
  data() {
    return {
      IcCart,
      showCart: false,
    };
  },
  computed: {
    store() {
      return cartStore();
    },
    quantity() {
      return this.store.quantity.value;
    },
  },
  methods: {
    checkClickAway(event) {
      const el = this.$refs.cart ? this.$refs.cart.$el : null;
      if(!el || !el.contains(event.target)) {
        this.show(false);
      }
    },
    show(show) {
      this.showCart = show;
      if(show) {
        document.addEventListener(clickEventType, this.checkClickAway, false);
      } else {
        document.removeEventListener(clickEventType, this.checkClickAway, false);
      }
    }
  },
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.header-cart-enter-active, .header-cart-leave-active {
  transition: opacity 0.3s linear;
}
.header-cart-enter-from, .header-cart-leave-to {
  opacity: 0;
}

.header-cart {
  @mixin title 12px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;
  position: relative;
  .header-cart-title {
    background-color: $bg-grey;
    display: flex;
    align-items: center;
    padding: 0 32px;
    height: 100%;
    border-radius: 17px;
    img {
      width: 16px;
      margin-right: 8px;
    }
  }
  .cart-wrap {
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 2000;
    cursor: default;
    .cart-size {
      padding-left: 2px;
    }
  }
  @media (max-width: 568px) {
    width: 100%;
    .cart-wrap {
      left: 0;
      .header-cart-title {
        margin: 0 24px;
      }
    }
  }
}
</style>
