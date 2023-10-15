<template>
  <main>
    <TheLanding :activeState="landingState" />
    <div class="cursor" />
    <TheHeader />
    <slot />
    <TheFooter />
  </main>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  data() {
    return { landingState: 'hidden' };
  },
  watch: {
    $route() {
      this.removeChangeCursor();
    },
  },
  mounted() {
    this.customCursor();
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) => item.addEventListener('mouseover', this.changeCursor));
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeChangeCursor)
      );
    document
      .querySelectorAll('.cursorInvert')
      .forEach((item) => item.addEventListener('mouseover', this.invertCursor));
    document
      .querySelectorAll('.cursorInvert')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeInvertCursor)
      );
  },
  updated() {
    this.removeChangeCursor();
  },
  destroyed() {
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.removeEventListener('mouseover', this.changeCursor)
      );
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.removeEventListener('mouseleave', this.removeChangeCursor)
      );
  },
  methods: {
    customCursor() {
      function moveCursor(props) {
        gsap.to('.cursor', 0.01, {
          opacity: 1,
          left: props.clientX,
          top: props.clientY,
          ease: 'none',
        });
      }
      document.addEventListener('mousemove', moveCursor);
    },
    changeCursor() {
      document.querySelector('.cursor').classList.add('active');
    },
    removeChangeCursor() {
      document.querySelector('.cursor').classList.remove('active');
    },
    invertCursor() {
      document.querySelector('.cursor').classList.add('invert');
    },
    removeInvertCursor() {
      document.querySelector('.cursor').classList.remove('invert');
    },
  },
};
</script>

<style lang="sass" scoped>
// Cursor Composable
.cursor
  position: fixed
  width: 2rem
  height: 2rem
  border-radius: 50%
  transform: translate(-50%, -50%)
  z-index: 999
  pointer-events: none
  background: $color
  transition: width .165s ease, height .165s ease, background .165s ease
  opacity: 0
  &.invert
    background: $color-light
  &.active
    width: 3rem
    height: 3rem
    background: $color-support

  @media ( hover: none )
    opacity: 0 !important
    display: none !important

.cursorInteract
  pointer-events: auto
  cursor: pointer
</style>
