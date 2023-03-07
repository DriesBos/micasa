<template>
  <div class="articlesList-ImageItem">
    <NuxtLink
      class="articlesList-ImageItem_Inner cursorInteract"
      :to="'/' + slug"
      v-editable="article"
    >
      <img
        :src="article.thumb_horizontal.filename"
        :alt="article.thumb_horizontal.alt"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ article: Object, slug: String });
</script>

<style lang="sass">
.articlesList
  &-ImageItem
    position: relative
    display: flex
    justify-content: center
    align-items: center
    height: 33.3333%
    overflow: hidden
    &_Inner
      display: flex
      justify-content: center
      align-items: center
      height: calc(100% - 3rem)
      width: auto
      aspect-ratio: 3 / 2
      overflow: hidden
      object-fit: contain
      img
        height: 100%
        width: 100%
        object-fit: cover
</style>
