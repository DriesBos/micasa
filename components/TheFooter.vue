<template>
  <footer class="footer cursorInvert">
    <div>
      <div class="footer-Logo displayFont cursorInteract">
        <NuxtLink to="/">
          <h1>Minka Haus</h1>
        </NuxtLink>
      </div>
    </div>

    <div>
      <a class="cursorInteract" href="https://www.instagram.com">Instagram</a>
      <a class="cursorInteract" href="https://www.instagram.com">Pinterest</a>
      <a class="cursorInteract" href="https://www.instagram.com"
        >info@minkahaus.com</a
      >
    </div>

    <div class="footer-Right_Bottom newsletter cursorInteract">
      <div class="newsletter-Title"><p>Newsletter</p></div>
      <div class="newsletter-Input">
        <input placeholder="Your email.." />
        <div class="newsletter-Icon">
          <nuxt-icon class="icon icon-Arrow" name="arrow-right" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  display: flex
  flex-wrap: nowrap
  background: $bg-black
  column-gap: var(--spacing-gap)
  color: $color-light
  padding: var(--spacing-sections) var(--spacing-sides) 2rem var(--spacing-sides)
  & > div
    display: flex
    flex-direction: column
    justify-content: flex-end
    flex: 1
    a, p
      color: $color-light
      font-size: 2rem
  &-Logo
    h1
      font-size: 4rem
      line-height: 0.6
      color: $color-light


.newsletter
  &-Input
    display: flex
    flex-wrap: nowrap
    border: 2px solid $color-light
    font-size: 2rem
    height: 3rem
    input
      background: transparent
      flex-grow: 1
      flex-shrink: 1
      padding: 0 1rem
      height: 100%
      width: 100px
  &-Icon
    position: relative
    display: flex
    align-items: center
    justify-content: center
    width: 3rem
    height: 100%
    border-left: 2px solid white
    .icon
      color: $color-light
</style>
