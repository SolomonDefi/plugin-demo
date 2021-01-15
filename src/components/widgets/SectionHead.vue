<template>
<div class="section-head">
  <div class="head-line1">
    <div class="head-index">
      {{ index }}
    </div>
    <div class="head-title">
      {{ copy.title }}
    </div>
  </div>
  <div class="head-line2">
    <div class="head-subtitle">
      {{ copy.subtitle }}
    </div>
    <div class="head-right">
      {{ copy.text_right }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'section-head',
  props: {
    index: {
      type: String,
      default: '1',
    },
    copy: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/css/global.css';

.section-head {
  color: $text-med;
  border-bottom: 1px solid $border-med;
  padding-bottom: 16px;
  margin-top: 48px;
  .head-line1 {
    display: flex;
    .head-index {
      width: 20px;
      height: 20px;
      border: 1px solid $text-med;
      border-radius: 10px;
      @mixin flex-center;
      @mixin title2 14px;
      margin-right: 8px;
    }
    .head-title {
      letter-spacing: 0.65px;
      @mixin title2 17px;
    }
  }
  .head-line2 {
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.42px;
    @mixin title-medium 12px;
    margin-top: 2px;
    color: $text-med2;
  }
}
</style>
