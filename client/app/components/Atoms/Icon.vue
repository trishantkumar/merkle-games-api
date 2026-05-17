<template>
  <span class="icon-wrapper" v-html="iconRaw" :class="name"></span>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconRaw = ref('');

const icons = import.meta.glob('~/assets/images/*.svg', { query: '?raw', import: 'default', eager: true });

watchEffect(() => {
  const matchedKey = Object.keys(icons).find(key => key.endsWith(`/${props.name}.svg`));
  if (matchedKey) {
    iconRaw.value = icons[matchedKey] as string;
  } else {
    iconRaw.value = '';
  }
});
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper :deep(svg) {
  width: 1em;
  height: 1em;
  display: block;
}
</style>
