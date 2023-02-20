<template>
  <div v-editable="blok" :class="heroClasses">
    <div>
      <h1>
        {{ blok.headline }}
      </h1>
      <h2>
        {{ blok.subheadline }}
      </h2>
    </div>
    <img
      :src="blok.background_image.filename"
      :alt="blok.background_image.alt"
    />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const heroClasses = computed(() => {
  return props.blok.layout === 'constrained'
    ? 'hero-Constrained'
    : 'hero-Fullwidth';
});
</script>
