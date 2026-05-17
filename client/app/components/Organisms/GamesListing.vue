<template>
  <div class="listing-section">
    <div class="games-section" v-if="games.length">
      <OrganismsGamesCard
        v-for="game in games"
        :key="game.id"
        :game="game as GameWithStats"
      />
    </div>
    <div class="no-games-found" v-else>No games found</div>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from "~/store/game.store";
import type { GameWithStats } from "~/types/games.type";

const gameStore = useGameStore();

const games = computed(() => {
  return gameStore.displayGames;
});
</script>
<style lang="scss" scoped>
.listing-section {
  width: 90%;
  margin: 0 auto;
  .games-section {
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .no-games-found {
    width: 100%;
    text-align: center;
    margin: 50px auto;
  }
}
</style>
