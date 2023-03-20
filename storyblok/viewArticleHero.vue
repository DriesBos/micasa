<template>
  <div v-editable="blok" class="articleHero">
    <div class="imageBlok">
      <img :src="blok.image.filename" :alt="blok.image.alt" />
    </div>
    <ArticlesListText :article="blok" :number="blok.number - 1" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.articleHero
  padding: var(--spacing-sides)
  .imageBlok
    position: relative
    height: calc(100vh - (3.2vw * 1.5))
    img
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      object-fit: cover
</style>
