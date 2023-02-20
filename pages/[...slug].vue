<script setup>
let { slug } = useRoute().params;

const resolveRelations = ['popular-articles.articles'];

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<!-- For index.vue if needed -->
<!-- <script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template> -->
