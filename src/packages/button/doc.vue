<template>
  <div class="Demo"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Demo extends Vue {

}
</script>

<style scoped lang="less">
.Demo{
  width: 1000px;
  height: 1000px;
  background-color: aquamarine;
}
</style>
