<template>
  <h2>
    {{ blok.headline }}
  </h2>
  <div class="articles">
    <ArticleCard
      v-for="article in blok.articles"
      :key="article.uuid"
      :article="article.content"
      :slug="article.full_slug"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
