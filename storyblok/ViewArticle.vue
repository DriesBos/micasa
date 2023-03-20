<template>
  <div v-editable="blok" class="view-Page view-Article">
    <div class="article-Landing">
      <div class="article-Landing_Title">
        <h1 ref="title" class="displayFont" :style="styleObject">
          {{ blok.title }}
        </h1>
      </div>
    </div>
    <div class="article-Content">
      <StoryblokComponent
        v-for="blok in blok.blocks"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <ArticlesNext />
  </div>
</template>
ß

<script setup>
const props = defineProps({ blok: Object });

const styleObject = reactive({
  fontSize: props.blok.title_size + 'vw',
});
</script>

<style lang="sass">
.article
  &-Landing
    height: calc(100vh - 5rem)
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding-bottom: 2rem
    &_Title
      font-size: 10vw
      padding: 0 var(--spacing-sides)
      h1
        line-height: 0.5
  &-Content
    margin-bottom: var(--spacing-sections)
    z-index: -1
    & > div
      margin-bottom: 4rem
      &:last-child
        margin-bottom: 0
    // & > .articleRow:first-child
    //   max-height: calc(100vh - 4rem)
    //   img
    //     width: 100%
    //     height: 100%
    //     object-fit: cover
</style>
