<template>
<div class="home-wrap">
  <DemoHeader />
  <NavMenu />
  <router-view />
  <DemoFooter />
</div>
</template>

<script>

export default {
  name: 'home',
};
</script>

<style lang="postcss">
@import '../assets/css/global.css';

.home-wrap {
  background-color: $main-dark;
}
</style>
