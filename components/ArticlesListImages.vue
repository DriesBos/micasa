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
      height: 16vh
      width: 24vh
      overflow: hidden
      object-fit: contain
      img
        height: 100%
        width: 100%
        object-fit: cover
</style>
