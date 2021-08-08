<template>
  <div class="site-nav">
    <div class="site-nav-title">
      {{ docs.name }}
      <router-link
        class="site-nav-item"
        v-for="(item,index) in docs.packages"
        :key="'docsPackage'+index"
        :to="item.name.toLowerCase()">
        {{ item.cName }}
      </router-link>
    </div>
    <div class="site-nav-title" v-for="(nav, index) in navs" :key="'nav'+index">
      {{ nav.name }}
      <router-link class="site-nav-item"
          v-for="(item,index1) in nav.packages"
          :key="'navItem'+index+'-'+index1"
          :to="item.name.toLowerCase()">
        {{ item.cName }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { nav, docs } from '../config.json';

@Component()
export default class Nav extends Vue {
  private docs = docs;

  private navs = nav;
}
</script>

<style scoped lang="less">
@import "../assets/styles/index.less";
.site-nav{
  width: @site-container-nav-width;
  padding-top: 24px + @site-header-height;
  top: 0;
  bottom: 0;
  overflow: scroll;
  background-color: @site-container-color;
  position: fixed;
  z-index: 1;
  .theme-fn-shadow();
  .site-nav-title{
    padding: 8px 0 8px 30px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
  }
  .site-nav-item{
    display: block;
    margin: 0;
    padding: 8px 0;
    color: #455a64;
    font-size: 14px;
    font-weight: normal;
    line-height: 28px;
    text-decoration: none;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
    cursor: default;
    &:hover{
      color: #17c37b;
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
}
</style>
