<template>
  <footer class="footer cursorInvert">
    <div>
      <div class="footer-Logo displayFont cursorInteract">
        <NuxtLink to="/">
          <h1>MiCasa</h1>
        </NuxtLink>
      </div>
    </div>

    <div>
      <a class="cursorInteract" href="https://www.instagram.com">Twitter</a>
      <a class="cursorInteract" href="https://www.instagram.com">Instagram</a>
      <a class="cursorInteract" href="https://www.instagram.com"
        >info@micasa.com</a
      >
    </div>

    <div class="footer-Right_Bottom newsletter cursorInteract">
      <div class="newsletter-Title"><p>Newsletter</p></div>
      <div class="newsletter-Input">
        <input placeholder="Your email.." />
        <nuxt-icon class="icon icon-Arrow_right" name="arrow-right" />
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  display: flex
  flex-wrap: nowrap
  background: $bg-black
  color: $color-light
  padding: var(--spacing-sections) var(--spacing-sides) 2rem var(--spacing-sides)
  & > div
    display: flex
    flex-direction: column
    justify-content: flex-end
    flex-basis: 33.3333%
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
    border: 2px solid $color-light
    font-size: 2rem
    height: 3rem
    input
      background: transparent
      flex-grow: 1
      padding: 0 1rem
    .icon
      display: flex
      align-items: center
      justify-content: center
      width: 3rem
      height: 100%
      border-left: 2px solid white
      color: $color-light
    svg
      width: 2rem !important
      height: 2rem !important
      margin-bottom: 0 !important
      object-fit: contain
</style>
