<template>
  <div class="btn cursorInteract" :class="{ active: active }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({ active: Boolean });
</script>

<!-- <style lang="sass" scoped>
.btn
  display: flex
  border: 2px solid $color
  border-radius: 1000px
  padding: .25em 1em
  cursor: pointer
  font-family: "Futura PT", Helvetica, Arial, sans-serif
  font-size: 1rem
  font-weight: normal
  letter-spacing: .025rem
  cursor: none
  &.active
    background: black
    color: $bg-yellow
    border: 2px solid transparent
</style> -->
