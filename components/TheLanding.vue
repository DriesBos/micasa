<template>
  <Teleport to="body">
    <div class="landing" :class="currentState">
      <div
        class="landing-Content cursorInteract"
        @click="currentState = 'hidden'"
        @mouseenter="
          currentState == 'hidden'
            ? (currentState = 'hidden')
            : (currentState = 'half')
        "
        @mouseleave="
          currentState == 'hidden'
            ? (currentState = 'hidden')
            : (currentState = 'full')
        "
      >
        <h1 class="displayFont">MiCasa</h1>
        <p>{{ data.story.content.landing_text }}</p>
      </div>
      <div class="landing-Image">
        <div class="landing-Image_Wrapper">
          <img :src="data.story.content.landing_image.filename" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({ activeState: String });

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
});

const currentState = ref(null);
currentState.value = props.activeState;
</script>

<style lang="sass" scoped>
.landing
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  transition: transform .33s ease-in-out, background .165s ease-in-out
  overflow: hidden
  z-index: +1
  pointer-events: none
  &-Content
    text-align: center
    z-index: +1
    max-width: 55rem
    pointer-events: auto
    transition: transform .33s ease-in-out, opacity .165s ease-in-out
    opacity: 1
    h1
      color: $color-light
      font-size: 33vmin
      line-height: 33vmin
      letter-spacing: -0.033em
      white-space: nowrap
    p
      color: $color-light
      font-size: 3rem
      line-height: 1.2
      font-weight: bold
      word-wrap: normal
      word-break: normal
      overflow-wrap: normal
      hyphens: none
  &-Image
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    padding: 2rem
    background: $bg-yellow
    transition: transform .165s ease-in-out
    &_Wrapper
      background: $color
      width: 100%
      height: 100%
    img
      width: 100%
      height: 100%
      object-fit: cover
      opacity: .66

  &.full
    background: hsl(100, 100%, 0%, 0.6)
    .landing
      &-Image
        transform: translateX(0) scale(1)
      &-Content
        transform: translateX(0) scale(1)
  &.half
    background: hsl(100, 100%, 0%, 0.2)

    .landing
      &-Image
        transform: translateX(0 - 4rem) scale(1)
      &-Content
        transform: translateX(0) scale(1)
        opacity: .8
  &.hidden
    background: hsl(100, 100%, 0%, 0)
    transform: translateX(-100%) scale(0.96)
    .landing
      &-Content
        opacity: 0
</style>
