<template lang="pug">
  .top
    .top__aligner(v-if="loaded")
      .top__aligner__status-code
        h1: vue-typer(text="410" v-bind="vueTyperSetting" :preTypeDelay="1500") 
        p: vue-typer(text="- Gone?" v-bind="vueTyperSetting" :preTypeDelay="2500")
      .top__aligner__system
        intro-animator
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'
import IntroAnimator from '~/components/IntroAnimator.vue'

@Component({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
      },
    ],
  },
  components: {
    IntroAnimator,
  },
})
export default class IndexPage extends Vue {
  @Provide() loaded = false

  mounted() {
    this.loaded = true
  }

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
.top {
  @include page-base;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--vh, 1vh) * 100);

  &__aligner {
    width: 451px;
    height: 120px;

    &__status-code {
      display: flex;
      flex-direction: row;
      align-items: center;
      // justify-content: center;

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
