<template>
  <div class="button">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.button
  display: flex
  background: black
  color: white
  border-radius: 1000px
  padding: .5em 2em
  cursor: pointer
  font-family: "Futura PT", Helvetica, Arial, sans-serif
  font-size: 1rem
</style>
