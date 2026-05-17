<template>
  <span style="display: flex; align-items: center; gap: 2px">
    <AtomsIcon
      v-for="i in 5"
      :key="i"
      :name="i <= Math.round((rating ?? 0) / 2) ? 'star' : 'empty-star'"
    />
  </span>
</template>
<script setup lang="ts">
interface Props {
  rating: number;
}

const props = defineProps<Props>();

const { rating } = toRefs(props);
</script>
