<template>
  <div v-editable="blok" class="articleSlider">
    <div class="imageBlok">
      <div @click="prevImage" class="imageBlok-Left" />
      <div @click="nextImage" class="imageBlok-Right" />
      <div v-for="(image, index) in blok.images" :key="image.id">
        <div v-show="currentIndex === index">
          <img :src="image.filename" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const currentIndex = ref(0);

const nextImage = () => {
  if (currentIndex.value < props.blok.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.blok.images.length - 1;
  }
};
</script>

<style lang="sass">
.articleSlider
  margin: 0 var(--spacing-sides)
  button
    z-index: 999
    border: 1px solid black
    pointer-events: auto
  .imageBlok
    position: relative
    // height: calc(100vh - (3.2vw * 1.5))
    aspect-ratio: 9/6
    margin-bottom: .5rem
    &-Left
      position: absolute
      left: 0
      height: 100%
      width: 50%
      z-index: +1
    &-Right
      position: absolute
      right: 0
      height: 100%
      width: 50%
      z-index: +1
    img
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      object-fit: contain
</style>
