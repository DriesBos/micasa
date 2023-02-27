<template>
  <div v-editable="props" v-html="resolvedRichText" class="markdown"></div>
</template>

<script setup>
const props = defineProps({ content: Object });

const resolvedRichText = computed(() => renderRichText(props.content));
</script>

<style lang="sass" scoped>
// Prefer style handling by cascading css (typography.sass) as much as possible.
.markdown p
  white-space: pre-line
</style>
