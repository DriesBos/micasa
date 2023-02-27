<template>
  <div v-editable="blok" class="imageBlok">
    <img :src="blok.image.filename" :alt="blok.image.alt" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
