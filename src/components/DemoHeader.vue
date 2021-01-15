<template>
<div class="header container">
  <div class="header-title">
    {{ $t('demo.title') }}
  </div>
  <div class="header-right">
    <HeaderCart />
  </div>
</div>
</template>

<script>

export default {
  name: 'demo-header',
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  position: relative;
  .header-title {
    @mixin title 42px;
  }
  .header-right {
    position: absolute;
    display: flex;
    height: 100%;
    align-items: center;
    right: 40px;
  }
}
</style>
