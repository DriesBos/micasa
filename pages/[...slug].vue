<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
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
