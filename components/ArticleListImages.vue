<template>
  <div class="articleList-ImageItem">
    <NuxtLink :to="'/' + slug" v-editable="article">
      <img
        :src="article.image.filename + '/m/600x0'"
        :alt="article.image.alt"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ article: Object, slug: String });
</script>

<style lang="sass">
.articleList
  &-ImageItem
    a
      display: flex
      justify-content: center
      width: 100%
      img
        width: 100%
        padding: 0 1em
        max-width: 250px
</style>
