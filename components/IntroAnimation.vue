<template lang="pug">
.intro-animation
  .intro-animation__status-code
    h1: vue-typer(text="410" v-bind="vueTyperSetting" :preTypeDelay="1500") 
    p: vue-typer(text="- Gone?" v-bind="vueTyperSetting" :preTypeDelay="2500")
  .intro-animation__system
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
.intro-animation {
  width: 451px;
  height: 140px;

  &__status-code {
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
</style>
