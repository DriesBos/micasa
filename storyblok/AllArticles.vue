<template>
  <div class="articleList">
    <MultiSelector
      class="articleList-MultiSelector"
      @mouseenter="hoverState = true"
      @mouseleave="hoverState = false"
    >
      <Button @click="toggleViewState" :active="viewState">text</Button>
      <Button @click="toggleViewState" :active="!viewState">image</Button>
    </MultiSelector>
    <div class="articleList-Container">
      <div
        :class="{ active: viewState, hover: hoverState }"
        class="articleList-TextContainer"
      >
        <ArticleListText
          v-for="(article, index) in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
          :number="index"
        />
      </div>
      <div
        :class="{ active: !viewState, hover: hoverState }"
        class="articleList-ImageContainer"
      >
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
const hoverState = ref(false);

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
    padding: 0 2rem
  &-TextContainer
    display: flex
    flex-direction: column
    padding: 2rem
    opacity: .25
    z-index: -1
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
    opacity: .25
    z-index: -1
    filter: blur(.25rem)
    & > div
      flex-basis: 33.3333%
      &:nth-last-child(-n+3)
        margin-bottom: 0
  &-Container
    position: relative
    transition: all .33s ease
    & > div.hover
      opacity: .35
      filter: blur(.125rem)
      transition: all .33s ease
    & > div.active
      opacity: 1 !important
      z-index: 0 !important
      filter: blur(0) !important
      transition: all .33s ease
</style>
