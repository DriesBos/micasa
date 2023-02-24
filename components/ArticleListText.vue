<template>
  <div v-editable="article" class="articleList-TextItem">
    <div class="articleList-Stripe" />
    <NuxtLink :to="slug">
      <div>AP—00{{ number + 1 }}</div>
      <div>{{ article.title }}</div>
      <div>
        {{ article.location }}
      </div>
      <div>{{ article.date }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ article: Object, slug: String, number: Number });
</script>

<style lang="sass">
.articleList
  &-Stripe
    position: absolute
    top: 50%
    left: 0
    right: 0
    height: .5rem
    background: black
    opacity: 0
  &-TextItem
    position: relative
    font-size: 3.5vw
    &:hover > .articleList-Stripe
      opacity: 1
    & a
      display: flex
      flex-wrap: nowrap
      width: 100%
      & > div
        &:nth-child(2), &:nth-child(3)
          flex-grow: 1
        &:first-child
          text-align: left
          width: calc(13vw + 2rem)
        &:last-child
          text-align: right
          width: 8vw
</style>
