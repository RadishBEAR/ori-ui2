<template>
   <div class="site-main">
     <site-header/>
     <div class="site-main-content">
         <site-nav/>
         <site-content/>
         <site-panel/>
     </div>
   </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import siteHeader from '../components/Header.vue';
import siteNav from '../components/Nav.vue';
import siteContent from '../components/Content.vue';
import sitePanel from '../components/Panel.vue';

@Component({
  components: {
    siteHeader,
    siteNav,
    siteContent,
    sitePanel,
  },
})
export default class Header extends Vue {

}
</script>

<style lang="less">
@import "../assets/styles/index.less";
.site-main{
  background-color: @site-container-background-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .site-main-content{
    width: @site-container-width;
    flex: 1;
    display: flex;
    position: relative;
    & div:not(:first-child){
      margin-left: 24px;
    }
  }
}
</style>
