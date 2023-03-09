<template>
  <div v-editable="blok" class="articleRow" :class="[columns, alignment]">
    <StoryblokComponent
      v-for="blok in blok.blocks"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

console.log(props.blok.columns);

const columns = ref(null);
props.blok.columns
  ? (columns.value = props.blok.columns)
  : (columns.value = '');

const alignment = ref(null);
props.blok.alignment
  ? (alignment.value = props.blok.alignment)
  : (alignment.value = '');
</script>

<style lang="sass" scoped>
.articleRow
  display: flex
  flex-wrap: nowrap
  padding: 0 var(--spacing-sides)
  column-gap: 2rem
  &.one
    & > div
      flex-grow: 1
  &.two
    justify-content: flex-start
    & > div
      flex-basis: calc((100% - 2rem) / 2)
  &.three
    justify-content: flex-start
    & > div
      width: calc((100% - 4rem) / 3)
  &.start
    justify-content: flex-start
  &.center
    justify-content: center
  &.end
    justify-content: flex-end
</style>
