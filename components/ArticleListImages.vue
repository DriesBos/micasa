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
    display: flex
    justify-content: center
    align-items: center
    a
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      img
        width: 16.5vw
</style>
