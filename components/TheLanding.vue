<template>
  <Teleport to="body">
    <div
      class="landing"
      :class="{ active: isActive }"
      @click="isActive = false"
    >
      <div class="landing-Content displayFont">
        <h1>MiCasa</h1>
        <p>{{ data.story.content.landing_text }}</p>
      </div>
      <div class="landing-Image">
        <img :src="data.story.content.landing_image.filename" />
      </div>
    </div>
  </Teleport>
</template>

<style lang="sass" scoped>
.landing
  position: fixed
  top: 0
  left: 0
  width: calc(100vw - .5rem)
  height: 100vh
  background: green
  display: flex
  align-items: center
  justify-content: center
  transform: translateX(-100%) scale(0.96)
  transition: transform .33s ease-in-out, border-radius .33s ease-in-out
  background: $bg-white
  border-radius: 0 2rem 2rem 0
  overflow: hidden
  z-index: +1
  &.active
    transform: translateX(0) scale(1)
    border-radius: 0
  &-Content
    text-align: center
    z-index: +1
    max-width: 50rem
    h1
      color: $color-light
      font-size: 20vmin
    p
      color: $color-light
      font-size: 3rem
      line-height: 1.2
  &-Image
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: black
    img
      width: 100%
      height: 100%
      object-fit: cover
      opacity: .66
</style>

<script setup>
const props = defineProps({ activeState: Boolean });

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
});

let isActive = ref(props.activeState);

console.log('LANDING', data.story.content.landing_image);
</script>
