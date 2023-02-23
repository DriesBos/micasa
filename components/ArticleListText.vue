<template>
  <div v-editable="article" class="articleList-TextItem">
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
  &-TextItem
    & a
      display: flex
      flex-wrap: nowrap
      width: 100%
      & > div
        flex-grow: 1
        &:last-child
          text-align: right
</style>
