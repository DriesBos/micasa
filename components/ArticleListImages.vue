<template>
  <div class="articleList-ImageItem">
    <div class="articleList-Stripe" />
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

<style lang="sass" scoped>
.articleList
  &-Stripe
    position: absolute
    top: 50%
    left: calc(25% - 1rem)
    width: calc(50% + 2rem)
    transform: translate(0, -50%)
    height: .5rem
    background: black
    opacity: 0
    pointer-events: none
  &-ImageItem
    position: relative
    display: flex
    justify-content: center
    align-items: center
    &:hover > .articleList-Stripe
      opacity: 1
    a
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      img
        width: 16.5vw
</style>
