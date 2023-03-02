<template>
  <div v-editable="article" class="articlesList-TextItem cursorInteract">
    <div class="articlesList-Stripe" />
    <NuxtLink :to="slug">
      <div>AP—00{{ number + 1 }}</div>
      <div>{{ article.title }}</div>
      <div>
        {{ article.location }}
      </div>
      <div>
        {{ article.location_type }}
      </div>
      <div>{{ article.date }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ article: Object, slug: String, number: Number });
</script>

<style lang="sass" scoped>
.articlesList
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
    &:hover > .articlesList-Stripe
      opacity: 1
    & a
      display: flex
      flex-wrap: nowrap
      width: 100%
      & > div
        font-weight: bold
        &:first-child
          text-align: left
          width: calc(13vw + 2rem)
        &:nth-child(2) // Name
          width: calc(22vw + 4rem)
        &:nth-child(3) // Location
          flex-grow: 1
        &:nth-child(4) // Type
          flex-shrink: 0
        &:last-child
          text-align: right
          width: 8vw
</style>
