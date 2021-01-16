<template>
<div class="slm-plugin-chargebacks">
  <div class="slm-plugin-content-title">
    {{ $t('plugin.chargebacks.select') }}
  </div>
  <div class="slm-plugin-content">
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.chargebacks.usd_price') }}
      </div>
      <div class="slm-plugin-row-right">
        {{ priceUsd }}
      </div>
    </div>
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.chargebacks.select_label') }}
      </div>
      <SlmSelect
        v-model="currency"
        :options="$tm('plugin.chargebacks.currency')"
        class="slm-plugin-row-right"
      />
    </div>
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.chargebacks.price') }}
      </div>
      <div class="slm-plugin-row-right">
        <div class="slm-plugin-price">
          {{ price || '0' }}
          <div class="slm-plugin-currency">
            {{ currency }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'slm-plugin-chargebacks',
  props: {
    prices: {
      type: Object,
      default: () => ({ priceEth: 0, priceSlm: 0, priceUsd: 0 })
    }
  },
  data() {
    return {
      currency: 'SLM',
    };
  },
  computed: {
    price() {
      return this.round(this.currency === 'ETH' ? this.prices.priceEth : this.prices.priceSlm);
    },
    priceUsd() {
      return `$${(this.prices.priceUsd / 100).toLocaleString()}`;
    },
  },
  methods: {
    round(n) {
      return Math.round((n + Number.EPSILON) * 1000000) / 1000000;
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/css/global.css';

.slm-plugin-chargebacks {
}
</style>
