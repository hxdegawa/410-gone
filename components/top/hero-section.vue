<template lang="pug">
  .hero
    h1.title さようなら。

    .waves
      img.purewhite(v-rellax="{speed: -10}" src="~/assets/images/wave-purewhite.svg" alt="wave")
      img.white(v-rellax="{speed: -5}" src="~/assets/images/wave-white.svg" alt="wave")
      img.gray(v-rellax="{speed: -2}" src="~/assets/images/wave-gray.svg" alt="wave")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: calc(var(--vh, 1vh) * 70);
  overflow: hidden;

  .title {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    
    /* font-family: 'Share Tech Mono', monospace; */
    font-family: 'Noto Sans JP', 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
}

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    img {
      position: absolute;
      object-fit: contain;
      width: calc(100% + 20px);
      left: -10px;
      bottom: -5px;

      @media screen and (max-width: $width-mobile) {
        width: 400%;
        left: -200%;
      }
    }
  }
}
</style>
