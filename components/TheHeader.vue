<template>
  <header class="header">
    <div class="header-Logo displayFont cursorInteract">
      <NuxtLink to="/" class="header-Logo_Item">
        <h1>Minka Haus</h1>
      </NuxtLink>
    </div>

    <div class="header-Nav">
      <nav>
        <ul>
          <li class="cursorInteract">
            <!-- <NuxtLink to="/">locations</NuxtLink>
            <template v-if="route.params.slug[1]">
              <div class="header-Nav_Icon">
                <nuxt-icon class="icon-Arrow_right" name="arrow-right" />
              </div>

              <NuxtLink :to="route.params.slug[1]">
                <span>
                  {{ pageTitle }}
                </span>
              </NuxtLink>
            </template> -->
          </li>
          <li
            class="header-Nav_Info cursorInteract"
            @mouseenter="modalMouseEnter"
            @mouseleave="modal == 'full' ? modal == 'full' : (modal = 'hidden')"
            @click="modal = 'full'"
          >
            <a>Info</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- <Teleport to="main">
      <Modal :modalState="modal" @closeModal="modal = 'hidden'" />
    </Teleport> -->
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

const modal = ref(null);
modal.value = 'hidden';

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
  column-gap: var(--spacing-gap)
  &-Logo
    flex: 1
    // border: 1px solid blue
    h1
      padding: 0 var(--spacing-sides)
      padding-top: 1rem
      font-size: 4rem
      line-height: 4rem
  &-Nav
    flex: 1
    // border: 1px solid blue
    &_Info
      margin-right: var(--spacing-sides)
    ul
      display: flex
      justify-content: space-between
      align-items: stretch
      li
        display: flex
        align-items: stretch
        height: 100%
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
    &_Icon
      padding-left: 1rem
      padding-right: 1rem
</style>
