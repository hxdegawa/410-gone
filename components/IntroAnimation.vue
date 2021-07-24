<template lang="pug">
client-only
  .wrapper
    .intro-animation
      .status-code
          h1: vue-typer(text="410" v-bind="vueTyperSetting" :preTypeDelay="1500") 
          p: vue-typer(text="- Gone?" v-bind="vueTyperSetting" :preTypeDelay="2500")
      .system
        warning-animation
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import WarningAnimation from '~/components/WarningAnimation.vue'

@Component({
  components: {
    WarningAnimation,
  },
})
export default class IntroAnimation extends Vue {
  get vueTyperSetting() {
    return {
      eraseOnComplete: false,
      typeDelay: 60,
      repeat: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background-color: $color-white;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .intro-animation {
    width: 480px;
    height: 140px;
  
    .status-code {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      margin-bottom: 20px;
  
      h1,
      p {
        font-family: 'Share Tech Mono', monospace;
      }
  
      h1 {
        font-size: 4rem;
      }
  
      p {
        position: relative;
        margin-left: 30px;
        font-size: 1rem;
      }
    }
  }
}
</style>
