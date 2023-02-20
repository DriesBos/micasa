<template>
  <div v-editable="blok">
    <img :src="blok.image.filename + '/m/1600x0'" :alt="blok.image.alt" />
    <div>
      <h1>{{ blok.title }}</h1>
      <div v-html="resolvedRichText" class="richText"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const resolvedRichText = computed(() => renderRichText(props.blok.content));
</script>
