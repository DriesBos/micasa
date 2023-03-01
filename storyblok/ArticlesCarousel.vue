<template>
  <div class="carousel">
    <div class="carousel-Divider" />
    <div class="carousel-Row">
      <NuxtLink
        v-for="(article, index) in articles"
        :key="article._uid"
        :to="'/' + article.full_slug"
      >
        <div class="carousel-Item">
          <div class="carousel-Item_Image">
            <img
              :src="article.content.thumb_vertical.filename"
              :alt="article.content.thumb_vertical.alt"
            />
          </div>
          <div class="carousel-Item_Text">
            <span> APP—0{{ index + 1 }} </span>
            <span>
              {{ article.name }}
            </span>
          </div>
        </div>
      </NuxtLink>
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

console.log('CAROUSEL', articles.value);
</script>

<style lang="sass" scoped>
.carousel
  width: 100vw
  display: flex
  flex-direction: column
  align-items: center
  &-Divider
    width: calc(100% - 2rem)
    padding: 0 1rem
    background: $color
    height: .5rem
  &-Row
    width: 100vw
    display: flex
    flex-wrap: nowrap
    column-gap: 1rem
    padding: 8rem
    overflow-x: auto
  &-Item
    height: 50vh
    width: 35vh
    display: flex
    flex-direction: column
    &_Image
      flex-grow: 1
      overflow: hidden
      margin-bottom: .5rem
      img
        height: 100%
        width: 100%
        object-fit: cover
    &_Text
      display: flex
      span
        margin-right: 1rem
</style>
