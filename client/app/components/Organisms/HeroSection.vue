<template>
  <section class="top-banner-wrapper">
    <div class="banner-section">
      <div class="heading-1">Top {{ games?.length ?? 0 }} Games</div>
      <div class="brand-text">
        <span class="brand-main">Merkle</span>
        <span class="brand-subtitle">Gaming</span>
      </div>
      <div class="description-text">Top {{ games?.length ?? 0 }} games liked between 2015-2017</div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useGameStore } from "~/store/game.store";

const gameStore = useGameStore();

const games = computed(() => {
  return gameStore.games;
});
</script>
<style lang="scss" scoped>
.top-banner-wrapper {
  background: linear-gradient(
    90deg,
    rgba(42, 98, 155, 0.1) 0%,
    rgba(87, 199, 133, 0.1) 50%,
    rgba(237, 221, 83, 0.1) 100%
  );
  .banner-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
    padding: 4rem 10px;
    .heading-1 {
      width: fit-content;
      font-weight: bold;
      font-size: $text-3xl;
      line-height: 38px;
      color: var(--text-color-dark);
      border: 1px solid #8b50bf;
      border-radius: 50px;
      padding: 12px 36px;
      background: rgba(139, 80, 191, 0.1);
      box-shadow: 0px 4px 15px 0px $box-shadow-color;
    }
    .brand-text {
      display: flex;
      gap: 5px;
      margin: 1rem 10px;
      .brand-main {
        font-size: $text-3xl;
        font-weight: 700;
        color: $primary-color;
      }
      .brand-subtitle {
        font-size: $text-3xl;
        font-weight: 400;
        color: $secondary-color;
      }
    }
    .description-text {
      margin: 10px;
      font-weight: 400;
      font-size: $text-xl;
    }
  }
}
</style>
