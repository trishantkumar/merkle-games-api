<template>
  <div class="outer-container">
    <MoleculesLoader v-if="isLoadingGames" text="Loading games list..." />
    <div class="container" v-else>
      <OrganismsHeroSection />
      <OrganismsActionSection class="action-section-container" />
      <LazyOrganismsGamesListing />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGames } from "~/services/game.service";
import { useGameStore } from "~/store/game.store";

const gameService = useGames();
const gameStore = useGameStore();

const { data: randomGames, pending: isLoadingGames } = await useAsyncData(
  "randomGames",
  () => gameService.fetchRandomGamesWithStats(),
  { lazy: true },
);

if (randomGames.value) {
  gameStore.setGames(randomGames.value);
}
</script>
<style lang="scss" scoped>
.outer-container {
  min-height: 90vh;
  .container {
    .action-section-container {
      border-bottom: 1px solid var(--border-color);
    }
  }
}
</style>
