<template>
  <div class="loader-wrapper">
    <div class="spinner"></div>
    <span class="loading-text" v-if="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "Loading...",
  },
});
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  min-height: 50vh;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--border-color, #e2e8f0);
    border-top-color: $primary-color;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .loading-text {
    font-size: $text-sm;
    color: var(--text-color);
    font-weight: 500;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
