<template>
  <div class="articleList">
    <MultiSelector class="articleList-MultiSelector">
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
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: flex-end
  &-MultiSelector
    width: 100%
    padding: 0 2rem
    justify-content: flex-end
    margin-bottom: 0rem
  &-TextContainer
    display: flex
    flex-direction: column
    padding: 2rem
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
