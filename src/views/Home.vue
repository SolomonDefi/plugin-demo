<template>
<div class="home-wrap">
  <DemoHeader />
  <NavMenu />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
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
  background-color: $bg-light;
}
</style>
