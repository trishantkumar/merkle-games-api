<template>
  <div class="games-card">
    <article>
      <NuxtLink :to="`/games/${game?.id}`">
        <div class="game-card-image-section">
          <NuxtImg
            v-if="coverImage"
            :src="coverImage"
            :alt="game?.title + ' cover image'"
            class="game-card-image-bg"
            loading="lazy"
            format="webp"
            sizes="sm:100vw md:50vw lg:400px"
          />
          <div class="game-card-image-inner-section">
            <div class="game-card-genre-name">{{ game?.genre?.name }}</div>
            <div class="game-card-rating">
              <AtomsIcon name="star" />
              {{ getRating(game?.stats?.average_rating ?? 0) }}
            </div>
          </div>
        </div>
        <div class="game-card-content-section">
          <div class="game-card-inner-content-section">
            <div class="game-card-content-section-name">{{ game?.title }}</div>
            <div class="game-card-content-section-date">
              <AtomsIcon name="calendar" /> {{ formatDate(game?.release_date ?? "") }}
            </div>
            <div class="game-card-content-section-rating">
              <MoleculesStarRating :rating="game?.stats?.average_rating ?? 0" />
              <b>{{ getRating(game?.stats?.average_rating ?? 0) }} </b>
              <span class="reviews"> ({{ game?.stats?.total_reviews ?? 0 }}) </span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>
<script setup lang="ts">
import type { GameWithStats } from "~/types/games.type";
import { getRating, formatDate, getCoverImage } from "~/utils";

interface Props {
  game: GameWithStats;
}

const props = defineProps<Props>();

const { game } = toRefs(props);

const coverImage = computed(() => {
  return getCoverImage(game.value.images ?? []);
});
</script>
<style lang="scss" scoped>
.games-card {
  border-radius: 20px;
  background-color: var(--card-bg);
  box-shadow: 0px 4px 15px 0px $box-shadow-color;
  article {
    cursor: pointer;
    .game-card-image-section {
      height: 200px;
      background-color: var(--border-color); /* Fallback if no image */
      border-radius: 20px 20px 0 0;
      position: relative;
      overflow: hidden;

      .game-card-image-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      }

      .game-card-image-inner-section {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem 0 1rem;
        .game-card-genre-name {
          font-size: $text-sm;
          font-weight: 500;
          color: #ffffff;
          border: 1px solid #8b50bf;
          border-radius: 20px;
          background: #6d28d9;
          width: fit-content;
          padding: 6px 14px;
          z-index: 1;
        }
        .game-card-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: $text-sm;
          background: var(--bg-color);
          padding: 6px 14px;
          border-radius: 20px;
          box-shadow: 0px 4px 15px 0px $box-shadow-color;
          width: fit-content;
          font-weight: 500;
          color: var(--text-color-dark);
        }
      }
    }
    .game-card-content-section {
      padding: 1.5rem;
      .game-card-inner-content-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .game-card-content-section-date,
        .game-card-content-section-rating {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .reviews {
          font-size: $text-sm;
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
