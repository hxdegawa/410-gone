<template lang="pug">
  .top
    intro-animation(v-if="!isConfirmed")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'
import IntroAnimation from '~/components/IntroAnimation.vue'

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
    IntroAnimation,
  },
})
export default class IndexPage extends Vue {
  @Getter('IntroConfirmation/isConfirmed') isConfirmed?: boolean
}
</script>

<style lang="scss" scoped>
.top {
  @include page-base;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--vh, 1vh) * 100);
}
</style>
