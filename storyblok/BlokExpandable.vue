<template>
  <div @click="show = !show" class="expandable" :class="{ active: show }">
    <div class="expandable-Top cursorInteract">
      <div class="expandable-Top_Icon">
        <nuxt-icon class="icon" name="plus" />
      </div>
      <h2>{{ blok.title }}</h2>
    </div>
    <Transition>
      <div v-if="show" class="expandable-Bottom">
        <markdown :content="blok.text" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const show = ref(false);
</script>

<style lang="sass" scoped>
.expandable
  display: flex
  flex-direction: column
  // padding: 0 4rem
  &-Top
    display: flex
    flex-wrap: nowrap
    align-items: center
    column-gap: 1rem
    &_Icon
      width: 2rem
      height: 2rem
      transition: transform .33s ease
    h2
      font-size: 4rem
  &-Bottom
    overflow: hidden
    .markdown
      max-width: 60em
  &.active
    .expandable-Top_Icon
      transform: rotate(135deg)


// Expand Animation
.v-enter-active, .v-leave-active
  transition: opacity 0.33s ease


.v-enter-from, .v-leave-to
  opacity: 0
</style>
