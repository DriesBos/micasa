<template>
  <div v-editable="blok" class="view-Page view-Article">
    <div>
      <img :src="blok.image.filename + '/m/1600x0'" :alt="blok.image.alt" />
    </div>
    <div>
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.location }}</p>
      <p>{{ blok.date }}</p>
      <Markdown :content="blok.content" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
