<template>
<router-view />
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="postcss">
@import './assets/css/font.css';
@import './assets/css/global.css';

html,body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: $bg-light;
  color: white;
  * {
    box-sizing: border-box;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.container {
  max-width: 1280px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
}

</style>
