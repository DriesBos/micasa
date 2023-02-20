<template>
  <div v-editable="blok">
    <img :src="blok.image.filename" :alt="blok.image.alt" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
