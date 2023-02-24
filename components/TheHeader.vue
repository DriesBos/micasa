<template>
  <header class="header">
    <div class="header-Logo displayFont cursorInteract">
      <NuxtLink to="/">
        <h1>MiCasa</h1>
      </NuxtLink>
    </div>
    <div class="header-Nav">
      <nav>
        <ul>
          <li class="cursorInteract">
            <NuxtLink to="/">locations</NuxtLink>

            <template v-if="route.params.slug[1]">
              <div class="header-Nav_Icon">></div>
              <NuxtLink :to="route.params.slug[1]">
                <span>
                  {{ route.params.slug[1] }}
                </span>
              </NuxtLink>
            </template>
          </li>
          <template v-if="headerMenu">
            <li
              v-for="blok in headerMenu"
              class="cursorInteract"
              :key="blok._uid"
            >
              <NuxtLink :to="blok.link.cached_url"
                >{{ blok.link.story.name }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header_menu;

console.log(route.params.slug);
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  align-items: center
  &-Logo
    padding: 1rem 2rem
    h1
      font-size: 4rem
  &-Nav
    ul
      display: flex
      li
        padding: 1rem 2rem
        display: flex
        font-size: 2rem
        text-transform: lowercase
        & .router-link-active
          border-bottom: $border
    &_Icon
      padding-left: .5em
      padding-right: .5em
</style>
