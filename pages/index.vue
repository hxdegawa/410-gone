<template lang="pug">
  .top
    intro-animation(v-if="!isConfirmed")
    section
      hero-section
    
    section
      about-section
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'
import IntroAnimation from '~/components/IntroAnimation.vue'

import HeroSection from '~/components/top/hero-section.vue'
import AboutSection from '~/components/top/about-section.vue'

@Component({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
      },
    ],
  },
  components: {
    IntroAnimation,
    HeroSection,
    AboutSection,
  },
})
export default class IndexPage extends Vue {
  @Getter('IntroConfirmation/isConfirmed') isConfirmed?: boolean
}
</script>

<style lang="scss" scoped>
.top {
  @include page-base;

  min-height: calc(var(--vh, 1vh) * 100);

  @mixin section {
    margin: 0 auto;
  }

  section {
    @include section;
  }
}

.margin {
  height: 1000px;
}
</style>
