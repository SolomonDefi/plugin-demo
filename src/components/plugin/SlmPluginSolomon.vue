<template>
<div class="slm-plugin-crypto">
  <div class="slm-plugin-content-title">
    {{ $t('plugin.solomon.select') }}
  </div>
  <div class="slm-plugin-content">
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.solomon.select_label') }}
      </div>
      <SlmSelect
        v-model="currency"
        :options="$tm('plugin.solomon.currency')"
        class="slm-plugin-row-right"
      />
    </div>
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.solomon.schedule') }}
      </div>
      <div class="slm-plugin-row-right">
        <SlmSelect
          v-model="year"
          :options="['2021', '2022', '2023']"
          class="slm-plugin-year"
        />
        <SlmSelect
          v-model="month"
          :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          class="slm-plugin-month"
          @update:modelValue="days = getDays($event)"
        />
        <SlmSelect
          v-model="day"
          :options="days"
        />
      </div>
    </div>
    <div class="slm-plugin-content-row">
      <div class="slm-plugin-select-title">
        {{ $t('plugin.solomon.protection') }}
      </div>
      <SlmSelect
        v-model="protection"
        :options="['0%', '5%','10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%']"
        class="slm-plugin-row-right"
      />
    </div>
  </div>
</div>
</template>

<script>
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default {
  name: 'slm-plugin-crypto',
  data() {
    return {
      month: 1,
      days: this.getDays(1),
      day: 1,
      year: '2021',
      currency: 'ETH',
      protection: '0%',
    };
  },
  methods: {
    getDays(month) {
      return [...Array(monthDays[month - 1] + 1).keys()].slice(1);
    },
  },
};
</script>

<style lang="postcss">
.slm-plugin-crypto {
  .slm-plugin-year {
    flex-grow: 1;
  }
  .slm-plugin-month, .slm-plugin-year {
    margin-right: 6px;
  }
}
</style>
