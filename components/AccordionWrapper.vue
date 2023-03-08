<template>
  <div
    v-for="(question, index) in questions"
    :key="question._uid"
    @click="handleAccordion(index)"
    class="expandable"
    :class="{ active: questions[index].isExpanded }"
  >
    <div class="expandable-Top cursorInteract">
      <div class="expandable-Top_Icon">
        <nuxt-icon class="icon" name="plus" />
      </div>
      <h2>{{ question.title }}</h2>
    </div>
    <Collapse
      :when="questions[index].isExpanded"
      class="collapse expandable-Bottom"
    >
      <markdown :content="question.text" />
    </Collapse>
  </div>
</template>

<script setup>
import { Collapse } from 'vue-collapsed';

const props = defineProps({ content: Object });

const questions = ref(null);
questions.value = props.content;

function handleAccordion(selectedIndex) {
  questions.value.forEach((_, index) => {
    questions.value[index].isExpanded =
      index === selectedIndex ? !questions.value[index].isExpanded : false;
  });
}
</script>

<style lang="sass" scoped>
.expandable
  display: flex
  flex-direction: column
  &-Top
    display: flex
    flex-wrap: nowrap
    align-items: center
    column-gap: 1rem
    &_Icon
      width: 2rem
      height: 2rem
      transition: transform .33s ease
    h2
      font-size: 4rem
  &-Bottom
    overflow: hidden
    opacity: 0
    .markdown
      max-width: 60em
  &.active
    .expandable-Top_Icon
      transform: rotate(135deg)

.collapse
  transition: height var(--vc-auto-duration) ease-out, opacity var(--vc-auto-duration) ease-out

.collapse[data-collapse='expanded'],
.collapse[data-collapse='expanding']
  opacity: 1

// .collapse[data-collapse='collapsed'],
.collapse[data-collapse='collapsing']
  opacity: 0
</style>
