<template>
  <div class="articles">
    <MultiSelector>
      <Button>text</Button>
      <Button>image</Button>
    </MultiSelector>
    <ArticleCard
      v-for="article in articles"
      :key="article.uuid"
      :article="article.content"
      :slug="article.full_slug"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const articles = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'blog',
  is_startpage: false,
});
articles.value = data.stories;
</script>
