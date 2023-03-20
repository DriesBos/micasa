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
    padding-top: 1rem
    margin-bottom: 1rem
    margin-left: var(--spacing-sides)
    margin-right: var(--spacing-sides)
    font-family: "Futura PT", Helvetica, Arial, sans-serif
    font-size: 2rem
    font-weight: bold
    text-transform: lowercase
    line-height: 2rem
    font-weight: bold
    border-bottom: $border-transparent
    &.active
      border-bottom: $border
      // Resets
      background: transparent !important
      color: $color !important
    &:first-child
      margin-right: calc(#{var(--spacing-sides)} / 2)
    &:last-child
      margin-left: calc(#{var(--spacing-sides)} / 2)
</style>
