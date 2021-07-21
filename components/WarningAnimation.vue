<template lang="pug">
  .intro
    .intro__warn
      i.intro__warn__icon.material-icons warning
      p.intro__warn__message: vue-typer(v-bind="typerSetting1")
    p.intro__command(v-show="selectionVisible"): vue-typer.with-caret(v-bind="typerSetting2")
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'

@Component({})
export default class WarningAnimation extends Vue {
  @Mutation('IntroConfirmation/confirmIntroWarning')
  confirmIntroWarning!: () => void

  @Mutation('IntroConfirmation/rejectIntroWarning')
  rejectIntroWarning!: () => void

  @Provide() selectionVisible = false

  mounted() {
    setTimeout(() => {
      this.selectionVisible = true
    }, 8500)

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'y':
          this.confirmIntroWarning()
          break
        case 'n':
          this.rejectIntroWarning()
          break
      }
    })
  }

  get typerSetting1() {
    return {
      text: 'A fatal vulnerability has found on this website.',
      eraseOnComplete: false,
      preTypeDelay: 6000,
      typeDelay: 40,
      repeat: 0,
    }
  }

  get typerSetting2() {
    return {
      text: 'Forcibly connect?: Y / N',
      eraseOnComplete: false,
      preTypeDelay: 8500,
      typeDelay: 40,
      repeat: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  display: block;

  &__warn {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    &__icon {
      display: inline-block;
      width: 30px;
      line-height: 30px;
      font-size: 1.5rem;
      text-align: center;
      color: $color-alert;
      opacity: 0;
      animation: blink step-start 0.2s 4.5s 4 forwards;
    }

    &__message {
      margin-left: 10px;
      font-family: 'Share Tech Mono', monospace;
    }
  }

  &__command {
    text-align: right;
    font-family: 'Share Tech Mono', monospace;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
