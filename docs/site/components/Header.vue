<template>
  <div class="site-header">
    <div class="site-header-container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Header extends Vue {

}
</script>

<style scoped lang="less">
@import "../assets/styles/index.less";
.site-header{
  width: 100%;
  height: @site-header-height;
  background-color: @site-header-background-color;
  display: flex;
  justify-content: center;
  z-index: 2;
  .site-header-container{
    width: @site-container-width;
  }
}
</style>
