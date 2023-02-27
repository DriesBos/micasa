<template>
  <div v-editable="blok" class="textBlok">
    <Markdown :content="blok.content" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
