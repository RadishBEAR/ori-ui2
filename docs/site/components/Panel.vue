<template>
  <div class="site-panel theme-card">
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Panel extends Vue {

}
</script>

<style scoped lang="less">
@import "../assets/styles/index.less";

.site-panel{
  width: @site-container-panel-width;
  height: @site-container-panel-height;
  margin-top: @site-container-margin-top;
  background-color: #fff;
}
</style>
