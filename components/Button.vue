<template>
  <div class="button" :class="{ active: active }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({ active: Object });
</script>

<style lang="sass" scoped>
.button
  display: flex
  border: 2px solid black
  border-radius: 1000px
  padding: .25em 1em
  cursor: pointer
  font-family: "Futura PT", Helvetica, Arial, sans-serif
  font-size: 1rem
  font-weight: bold
  letter-spacing: .025rem
  &.active
    background: black
    color: white
    border: 2px solid transparent
</style>
