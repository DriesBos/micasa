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

<style lang="sass" scoped>
.articleList
  &-Stripe
    position: absolute
    top: 50%
    left: 0
    right: 0
    height: .5rem
    background: black
    opacity: 0
    pointer-events: none
  &-TextItem
    position: relative
    font-size: 3vw
    &:hover > .articleList-Stripe
      opacity: 1
    & a
      display: flex
      flex-wrap: nowrap
      width: 100%
      & > div
        font-weight: bold
        &:nth-child(2)
          flex-grow: 1
          // border: 1px solid green
        &:nth-child(3)
          width: calc(34vw + 4rem)
          // border: 1px solid green
          flex-shrink: 0
        &:first-child
          text-align: left
          width: calc(13vw + 4rem)
        &:last-child
          text-align: right
          width: 8vw
</style>
