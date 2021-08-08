<template>
  <div class="site-nav">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Nav extends Vue {

}
</script>

<style scoped lang="less">
@import "../assets/styles/index.less";
.site-nav{
  width: @site-container-nav-width;
  background-color: @site-container-nav-color;
  .theme-fn-shadow();
}
</style>
