<template>
  <div class="site-content">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Content extends Vue {

}
</script>

<style scoped lang="less">
@import "../assets/styles/index.less";

.site-content{
  flex: 1;
  padding-left: @site-container-nav-width;
  margin-top: @site-container-margin-top;
}
</style>
