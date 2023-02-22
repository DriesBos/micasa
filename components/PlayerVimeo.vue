<template>
  <!-- prettier-ignore -->
  <iframe
    :src="'https://player.vimeo.com/video/' + videoid + '?autoplay=' + autoplay + '&muted=true'"
    frameborder="0"
    allow="autoplay"
    transparent="true"
    autopause="true"
    loop="true"
    muted="true"
    playsinline="true"
    title="false"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
</template>

<script setup>
const props = defineProps({ videoid: String, autoplay: String });
</script>
