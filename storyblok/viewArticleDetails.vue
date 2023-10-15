<template>
  <div class="details">
    <Markdown :content="blok.description" />
    <Markdown :content="blok.details" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

onMounted(() => {
  // console.log('mounted', props.blok);
});
</script>

<style lang="sass">
.details
  margin: 0 var(--spacing-sides)
  display: flex
  gap: var(--spacing-three)
  & > div
    flex: 1
    &.markdown p
      text-align: left !important
    &:last-child
      max-width: 33%
</style>
