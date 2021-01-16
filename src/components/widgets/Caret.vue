<template>
<div class="caret" />
</template>

<script>
export default {
  name: 'caret',
};
</script>

<style lang="postcss" scoped>
@import '../../assets/css/global.css';

.caret {
  width: 8px;
  height: 8px;
  transform: rotate(315deg);
  border-left: 3px solid $bg-grey;
  border-bottom: 3px solid $bg-grey;
  margin-left: 8px;
}
</style>