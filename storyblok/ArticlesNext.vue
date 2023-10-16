<template>
  <div class="ArticlesNext">
    <template v-if="articlesPrev !== undefined || null">
      <NuxtLink
        :to="articlesPrev.slug"
        class="ArticlesNext-Item cursorInteract"
      >
        <div class="aspectRatio aspectRatio-FourThree ArticlesNext-Image">
          <img :src="articlesPrev.content.thumb_horizontal.filename" />
        </div>
        <nuxt-icon class="icon icon-Arrow" name="arrow-right" />
        <p>{{ articlesPrev.name }}</p>
      </NuxtLink>
    </template>
    <div v-else class="" />

    <template v-if="articlesNext !== undefined || null">
      <NuxtLink
        :to="articlesNext.slug"
        class="ArticlesNext-Item cursorInteract"
      >
        <p>{{ articlesNext.name }}</p>
        <nuxt-icon class="icon icon-Arrow" name="arrow-right" />
        <div class="aspectRatio aspectRatio-FourThree ArticlesNext-Image">
          <img :src="articlesNext.content.thumb_horizontal.filename" />
        </div>
      </NuxtLink>
    </template>
    <div v-else class="" />
  </div>
</template>

<style lang="sass" scoped>
.ArticlesNext
  display: flex
  justify-content: space-between
  height: 8rem
  background: $bg-white
  width: 100vw
  overflow: hidden
  &-Item
    display: flex
    align-items: center
    justify-content: center
    transition: transform .25s ease
    span
      margin-left: 2rem
      margin-right: 2rem
      transition: margin-left .25s ease, margin-right .25s ease
    &:hover
      span
        margin-left: 1rem
        margin-right: 1rem
    &:first-child
      justify-content: flex-start
      transform: translateX(-12rem)
      span
        transform: rotate(180deg)
      &:hover
        transform: translateX(0)
    &:last-child
      justify-content: flex-end
      transform: translateX(12rem)
      &:hover
        transform: translateX(0)

  &-Image
    height: 100%
    img
      height: 100%
</style>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, onUpdated } from 'vue';

defineProps({ blok: Object });

const router = useRouter();
const route = useRoute();

const articles = ref(null);
const articlesPrev = ref(undefined);
const articlesNext = ref(undefined);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'blog',
  is_startpage: false,
});

articles.value = data.stories;

function getSlugs() {
  let array = articles.value;
  array.forEach((element, index) => {
    if ('/' + element.full_slug == router.currentRoute.value.path) {
      if (articles.value[index - 1] !== undefined) {
        articlesPrev.value = articles.value[index - 1];
      } else {
        articlesPrev.value = undefined;
      }
      if (articles.value[index + 1] !== undefined) {
        articlesNext.value = articles.value[index + 1];
      } else {
        articlesNext.value = undefined;
      }
    }
  });
}

onMounted(() => {
  getSlugs();
});
</script>
