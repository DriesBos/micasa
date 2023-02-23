<template>
  <div class="multiSelector">
    <slot />
  </div>
</template>

<style lang="sass">
.multiSelector
  display: flex
  & > div
    margin-right: 1em
    &:last-child
      margin-right: 0
</style>
