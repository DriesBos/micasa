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
  background: #EFEEEC
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
      transform: translateX(-12rem)
      span
        margin-right: 1rem
        transform: rotate(180deg)
      &:hover
        transform: translateX(0)
    &:last-child
      transform: translateX(12rem)
      span
        margin-left: 1rem
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
        console.log('HAS PREV', articles.value[index - 1]);
        articlesPrev.value = articles.value[index - 1];
      } else {
        console.log('NO PREV');
        articlesPrev.value = undefined;
      }
      if (articles.value[index + 1] !== undefined) {
        console.log('HAS NEXT', articles.value[index + 1]);
        articlesNext.value = articles.value[index + 1];
      } else {
        console.log('NO NEXT');
        articlesNext.value = undefined;
      }
    }
  });
  console.log('PREV', typeof articlesPrev.value);
  console.log('NEXT', typeof articlesNext.value);
}

onMounted(() => {
  getSlugs();
});
</script>
