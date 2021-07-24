<template lang="pug">
  .hero
  
    //- h3 儚い創作を愛する人々へ。
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped>
$color-bg-about: #dedede;

.hero {
  position: relative;
  min-height: calc(var(--vh, 1vh) * 70);
  overflow: hidden;
  background-color: $color-bg-about;
}
</style>
