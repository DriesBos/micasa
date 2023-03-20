<template>
  <div v-editable="article" class="articlesList-TextItem cursorInteract">
    <div class="articlesList-Stripe" />
    <NuxtLink :to="slug">
      <div>
        <div class="number">AP—00{{ number + 1 }}</div>
        <div class="title">{{ article.title }}</div>
      </div>
      <div>
        <div class="location">
          {{ article.location }}
        </div>
        <!-- <div>
          {{ article.location_type }}
        </div> -->
        <div class="date">{{ article.date }}</div>
      </div>
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
    &.fontMedium a
      font-size: 2rem
    &.fontLarge a
      font-size: 3rem
    &:hover > .articlesList-Stripe
      opacity: 1
    & a
      display: flex
      column-gap: var(--spacing-gap)
      flex-wrap: nowrap
      width: 100%
      font-weight: bold
      & > div
        flex: 1
        display: flex
        column-gap: var(--spacing-gap)
        & > div
          // border: 1px solid blue
          &.number
            width: 11vw
          &.title
            flex-grow: 1
          &.location
            flex-grow: 1
          &.date
            width: 6.77vw
            text-align: right
</style>
