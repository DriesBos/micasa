<template>
  <div class="articleList">
    <MultiSelector class="articleList-MultiSelector">
      <Button @click="toggleViewState" :active="viewState">text</Button>
      <Button @click="toggleViewState" :active="!viewState">image</Button>
    </MultiSelector>
    <div class="articleList-Container">
      <div :class="{ active: viewState }" class="articleList-TextContainer">
        <ArticleListText
          v-for="(article, index) in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
          :number="index"
        />
      </div>
      <div :class="{ active: !viewState }" class="articleList-ImageContainer">
        <ArticleListImages
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
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
  console.log(viewState.value);
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
    z-index: -1
    opacity: .25
    transition: opacity .33s ease
    filter: blur(.25rem)
    & > div
      margin-bottom: 1rem
      &:last-child
        margin-bottom: 0
  &-ImageContainer
    position: absolute
    left: 2rem
    top: 2rem
    right: 2rem
    bottom: 2rem
    display: flex
    justify-content: space-evenly
    justify-content: flex-start
    flex-wrap: wrap
    z-index: -1
    opacity: .25
    filter: blur(.25rem)
    transition: opacity .33s ease
    & > div
      flex-basis: 33.3333%
      &:nth-last-child(-n+3)
        margin-bottom: 0
  &-Container
    position: relative
    & > div.active
      opacity: 1
      z-index: 0
      transition: opacity .33s ease, blur .165 ease
      filter: blur(0)
</style>
