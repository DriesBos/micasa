<template>
  <div class="modal" :class="modal">
    <div class="modal-Box" @click="$emit('closeModal')">
      <div class="modal-Box_Icon icon cursorInteract">
        <nuxt-icon class="icon-Span" name="close" />
      </div>
      <div v-if="content" class="modal-Box_Content">
        <div v-for="el in content" :key="el._uid">
          <Markdown :content="el.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const props = defineProps({ modalState: String, data: Object });

const modal = ref(props.modalState);

const content = ref(null);
content.value = props.data;

watch(
  () => props.modalState,
  (value) => {
    modal.value = value;
  }
);
</script>

<style lang="sass" scoped>
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
