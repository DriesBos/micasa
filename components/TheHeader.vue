<template>
  <header class="header">
    <div class="header-Logo cursorInteract">
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
              <span>{{ route.params.slug[1] }}</span></template
            >
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
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  &-Logo
    padding: 1em
  &-Nav
    ul
      display: flex
      li
        padding: 1em
        display: flex
    &_Icon
      padding-left: .5em
      padding-right: .5em
  a
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
