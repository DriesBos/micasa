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
          <li class="cursorInteract">
            <a @click="modal = true">Info</a>
          </li>
        </ul>
      </nav>
    </div>
    <Teleport to="body">
      <div class="modal" v-if="modal" @click="modal = false">
        <div class="modal-Box">
          <h2>HEADER</h2>
          <p>TEXT</p>
          <Button @click="modal = false">CLOSE</Button>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const route = useRoute();
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
});

const modal = ref(false);

const headerMenu = ref(null);
headerMenu.value = data.story.content.header_menu;
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
        a, span, div
          font-size: 2rem
          font-weight: bold
          text-transform: lowercase
          line-height: 2rem
          font-weight: bold
        & .router-link-active
          border-bottom: $border
    &_Icon
      padding-left: .5em
      padding-right: .5em

.modal
  position: absolute
  top: 0
  left: 0
  right: 0
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  z-index: +1
  background: hsl(100, 100%, 0%, 0.6)
  &-Box
    background: $bg-white
    width: 300px
    height: 300px
    border-radius: 1rem 1rem 0 0
    display: flex
    justify-content: center
    align-items: center
</style>
