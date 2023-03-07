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
              <div class="header-Nav_Icon">
                <nuxt-icon class="icon-Arrow_right" name="arrow-right" />
              </div>

              <NuxtLink :to="route.params.slug[1]">
                <span>
                  {{ pageTitle }}
                </span>
              </NuxtLink>
            </template>
          </li>
          <li
            class="cursorInteract"
            @mouseenter="modalMouseEnter"
            @mouseleave="modal == 'full' ? modal == 'full' : (modal = 'hidden')"
            @click="modal = 'full'"
          >
            <a>Info</a>
          </li>
        </ul>
      </nav>
    </div>

    <Teleport to="main">
      <div class="modal" :class="modal" @click="modal = 'hidden'">
        <div class="modal-Box">
          <div class="modal-Box_Icon icon cursorInteract">
            <nuxt-icon
              @click="modal = 'hidden'"
              class="icon-Span"
              name="close"
            />
          </div>
          <div v-if="infoContent" class="modal-Box_Content">
            <div v-for="blok in infoContent" :key="blok._uid">
              <Markdown :content="blok.content" />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const route = useRoute();

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header_menu;

const infoContent = ref(null);
infoContent.value = data.story.content.info_content;

const modal = ref('hidden');

const pageTitle = ref('page title');

function updateTitle() {
  if (route.params.slug[0] === 'blog') {
    let str = '';
    str = route.params.slug[1];
    str = str.replace(/-/g, ' ');
    pageTitle.value = str;
  }
}

onMounted(() => {
  updateTitle();
});

onUpdated(() => {
  updateTitle();
});

function modalMouseEnter() {
  if (modal.value === 'hidden') {
    modal.value = 'half';
  } else if (modal.value == 'half') {
    modal.value = 'half';
  } else if (modal.value == 'full') {
    modal.value = 'full';
  }
}
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  align-items: center
  &-Logo
    padding: 1rem var(--spacing-sides)
    padding-bottom: 0
    h1
      font-size: 4rem
      line-height: 4rem
  &-Nav
    ul
      display: flex
      align-items: center
      li
        padding: 1rem var(--spacing-sides)
        display: flex
        align-items: center
        a
          border-bottom: $border-transparent
        a:hover
          border-bottom: $border
        a, span, div
          font-size: 2rem
          font-weight: bold
          text-transform: lowercase
          line-height: 2rem
          font-weight: bold
        a span
          text-transform: capitalize
        & .router-link-active
          border-bottom: $border
        &:last-child
          padding-right: var(--spacing-sides)
    &_Icon
      padding-left: 1rem
      padding-right: 1rem

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
  pointer-events: none
  transition: background .165s ease-in-out
  &-Box
    position: fixed
    background: $bg-white
    width: 100%
    transform: scale(0.96)
    height: calc(100vh - 3rem)
    border-radius: 2rem 2rem 0 0
    padding: 0 var(--spacing-sides)
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    pointer-events: auto
    overflow: auto
    transition: top .165s ease-in-out, width .33s ease-in-out, transform .33s ease-in-out
    &::-webkit-scrollbar
      display: none
    &_Icon
      position: absolute
      top: 2rem
      right: 2rem
    &_Content
      padding: var(--spacing-sections) 0
      height: 100%
      overflow-y: auto
      &::-webkit-scrollbar
        display: none
  &.hidden
    background: hsl(100, 100%, 0%, 0)
    .modal-Box
      top: 100vh
  &.half
    background: hsl(100, 100%, 0%, 0.2)
    .modal-Box
      top: calc(100vh - 4rem)
  &.full
    background: hsl(100, 100%, 0%, 0.6)
    pointer-events: auto
    .modal-Box
      top: 3rem
      width: 100%
      transform: scale(1)
      transition: top .33s ease-in-out, width .165s ease-in-out .165s, transform .33s ease-in-out
</style>
