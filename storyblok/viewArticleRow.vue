<template>
  <div v-editable="blok" class="articleRow">
    <StoryblokComponent
      v-for="blok in blok.blocks"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.articleRow
  display: flex
  flex-wrap: nowrap
  padding: 0 var(--spacing-sides)
  column-gap: 1rem
  & > div
    flex-grow: 1
    min-width: calc(50% - .5rem)
</style>
