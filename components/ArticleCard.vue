<template>
  <NuxtLink :to="'/' + slug" v-editable="article">
    <img :src="article.image.filename + '/m/600x0'" :alt="article.image.alt" />
    <div>
      <h3>
        {{ article.title }}
      </h3>
      <div>
        {{ article.teaser }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({ article: Object, slug: String });
</script>
