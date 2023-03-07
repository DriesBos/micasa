<template>
  <div @click="show = !show" class="expandable" :class="{ active: show }">
    <div class="expandable-Top cursorInteract">
      <div class="expandable-Top_Icon">
        <nuxt-icon class="icon" name="close" />
      </div>
      <h2>{{ blok.title }}</h2>
    </div>
    <div v-if="show" class="expandable-Bottom">
      <markdown :content="blok.text" />
    </div>
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
  &-Top
    display: flex
    flex-wrap: nowrap
    align-items: center
    column-gap: 1rem
    &_Icon
      width: 2rem
      height: 2rem
    h2
      font-size: 4rem
  &-Bottom
    // max-height: 0
    padding: 0 var(--spacing-sides)
    overflow: hidden
    .markdown
      max-width: 60em
  &.active
    // .expandable-Bottom
    //   max-height: 100%
</style>
