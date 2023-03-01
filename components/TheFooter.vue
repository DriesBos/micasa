<template>
  <footer class="footer cursorInvert">
    <div class="footer-Left">
      <div class="footer-Left_Logo displayFont cursorInteract">
        <NuxtLink to="/">
          <h1>MiCasa</h1>
        </NuxtLink>
      </div>
    </div>

    <div class="footer-Right">
      <div class="footer-Right_Top">
        <div>
          <a class="cursorInteract" href="https://www.instagram.com">Twitter</a>
          <a class="cursorInteract" href="https://www.instagram.com"
            >Instagram</a
          >
        </div>
        <div>
          <a class="cursorInteract" href="https://www.instagram.com"
            >info@micasa.com</a
          >
          <a class="cursorInteract" href="https://www.instagram.com"
            >+351242424240</a
          >
        </div>
      </div>

      <div class="footer-Right_Bottom newsletter cursorInteract">
        <div class="newsletter-Title"><p>Newsletter</p></div>
        <div class="newsletter-Input">
          <input placeholder="Your email.." />
          <nuxt-icon class="icon icon-Arrow_right" name="arrow-right" />
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
  color: $color-light
  padding: var(--spacing-sections) var(--spacing-sides) var(--spacing-base) var(--spacing-sides)
  column-gap: 1rem
  & > div
    display: flex
    flex-direction: column
    justify-content: flex-end
    flex-basis: 50%
    column-gap: 1rem
  &-Left_Logo
    h1
      font-size: 4rem
      line-height: 0.6
      color: $color-light
  &-Right
    a, p
      color: white
      font-size: 2rem
    & > div
      flex-grow: 1
    &_Top
      display: flex
      flex-wrap: nowrap
      margin-bottom: var(--spacing-base)
      & > div
        flex-basis: 50%
        display: flex
        flex-direction: column
        column-gap: 1rem
    &_Bottom
      display: flex
      flex-direction: column
      & > div
        &:first-child
          margin-bottom: .5rem

.newsletter
  &-Input
    display: flex
    border: 2px solid white
    font-size: 2rem
    height: 4rem
    input
      background: transparent
      flex-grow: 1
      padding: 0 1rem
    .icon
      display: flex
      align-items: center
      justify-content: center
      width: 4rem
      height: 4rem
      border-left: 2px solid white
      color: white !important
    svg
      color: white !important
      width: 2rem !important
      height: 2rem !important
      object-fit: contain
</style>
