<template>
  <main>
    <TheHeader />
    <div class="cursor" />
    Mouse position is at: {{ x }}, {{ y }}
    <slot />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMouse } from './../composables/mouse';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { x, y } = useMouse();
</script>
