<template>
  <div class="multiSelector">
    <slot />
  </div>
</template>

<style lang="sass">
.multiSelector
  display: flex
  flex-wrap: nowrap
  border: 2px solid $color
  border-radius: 1000px
  & > .btn
    border: 0
</style>
