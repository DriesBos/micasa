<template>
  <div class="multiSelector">
    <slot />
  </div>
</template>

<style lang="sass">
.multiSelector
  display: flex
  flex-wrap: nowrap
  & > .btn
    // Resets
    border: 0
    border-radius: 0
    margin: 1rem var(--spacing-sides)
    margin-right: .5rem
    font-family: "Futura PT", Helvetica, Arial, sans-serif
    font-size: 2rem
    font-weight: bold
    text-transform: lowercase
    line-height: 2rem
    font-weight: bold
    &.active
      border-bottom: $border
      // Resets
      background: transparent !important
      color: $color !important
    &:last-child
      margin-right: var(--spacing-sides)
</style>
