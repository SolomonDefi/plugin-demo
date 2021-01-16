<template>
<div :key="$route.name" class="store-page">
  <div class="container">
    <div class="store-title">
      {{ $t(`demo.${name}.title`) }}
    </div>
    <div class="store-products">
      <StoreProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</div>
</template>

<script>
import { getProducts } from '/src/api.js';

export default {
  name: 'store-page',
  data() {
    return {
      products: [],
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
  },
  watch: {
    name(newVal) {
      this.refreshProducts(newVal);
    },
  },
  methods: {
    refreshProducts(type) {
      try {
        this.products = getProducts(type);
      } catch(e) {
        console.log(e);
      }
    }
  },
  beforeRouteUpdate() {

  },
  mounted() {
    this.refreshProducts(this.name);
  },
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.store-page {
  background-color: $bg-light;
  color: $text-dark;
  .store-title {
    @mixin title 32px;
    padding-top: 40px;
    text-align: center;
  }
  .store-products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 64px;
  }
}
</style>
