<template>
  <div class="tc-page">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'page'
}
</script>
<style lang='less'>
.tc-page {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  bottom: 0;
}
</style>

