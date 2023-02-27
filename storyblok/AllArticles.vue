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

const viewState = ref(true);
const hoverState = ref(false);

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
  min-height: calc(100vh - 5rem)
  &-MultiSelector
    padding: 0 var(--spacing-sides)
  &-TextContainer
    display: flex
    flex-direction: column
    padding: 2rem var(--spacing-sides)
    padding-bottom: .5rem
    opacity: .25
    z-index: -1
    filter: blur(.25rem)
    & > div
      margin-bottom: .5rem
      &:last-child
        margin-bottom: 0
  &-ImageContainer
    position: absolute
    left: var(--spacing-sides)
    top: 2rem
    right: var(--spacing-sides)
    bottom: .5rem
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
    transition: all .33s ease-in-out
    & > div.hover
      opacity: .35
      filter: blur(.125rem)
      transition: all .33s ease-in-out
    & > div.active
      opacity: 1 !important
      z-index: 0 !important
      filter: blur(0) !important
      transition: all .33s ease-in-out
</style>
