<template>
  <div class="articleList">
    <MultiSelector>
      <Button @click="toggleViewState">text</Button>
      <Button @click="toggleViewState">image</Button>
    </MultiSelector>
    <div v-if="viewState === false" class="articleList-TextContainer">
      <ArticleListText
        v-for="(article, index) in articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
        :number="index"
      />
    </div>
    <div v-else class="articleList-ImageContainer">
      <ArticleListImages
        v-for="article in articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
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

const viewState = ref(false);

function toggleViewState() {
  viewState.value = !viewState.value;
}
</script>

<style lang="sass">
.articleList
  &-TextContainer
    display: flex
    flex-direction: column
  &-ImageContainer
    display: flex
    justify-content: space-evenly
    justify-content: flex-start
    flex-wrap: wrap
    & > div
      flex-basis: 33%
      margin-bottom: 1em
      &:nth-last-child(-n+3)
        margin-bottom: 0
</style>
