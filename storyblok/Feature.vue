<template>
  <div v-editable="blok">
    <h3>
      {{ blok.name }}
    </h3>
    <img :src="blok.image.filename" :alt="blok.image.alt" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
