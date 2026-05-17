<template>
  <div class="game-details-section">
    <MoleculesLoader v-if="isLoading" text="Loading game details..." />
    <div class="game-details-inner-section" v-else>
      <div class="game-banner-section">
        <NuxtImg
          v-if="coverImage"
          :src="coverImage"
          :alt="game?.title + ' hero banner'"
          class="game-banner-bg"
          preload
          format="webp"
        />
        <div class="game-banner-inner-section">
          <NuxtLink class="game-page-back-btn" to="/">
            ← Back to games
          </NuxtLink>
        </div>
      </div>
      <div class="game-details-content-section">
        <div class="game-details-inner-content-section">
          <div class="game-page-game-name">
            <h1>{{ game?.title }}</h1>
            <div class="title-genre-name">{{ game?.genre?.name }}</div>
          </div>
          <div class="game-page-game-date">
            <AtomsIcon name="calendar" />
            {{ formatDate(game?.release_date ?? "") }}
          </div>
          <div class="game-page-game-rating">
            <MoleculesStarRating :rating="game?.stats?.average_rating ?? 0" />
            <span
              ><b>{{ getRating(game?.stats?.average_rating ?? 0) }}</b></span
            >
            <span class="reviews"> ({{ game?.stats?.total_reviews }}) </span>
          </div>
          <div class="game-page-game-description">
            <h2>Description</h2>
            <p>
              {{ game?.description }}
            </p>
          </div>
          <div class="game-page-game-description">
            <h2>Developer</h2>
            <p>
              {{ game?.developer?.name }} founded {{ game?.title }} in
              {{ game?.developer?.founded_year }} in
              {{ game?.developer?.country }}
            </p>
          </div>
          <div class="game-page-game-reviews">
            <h2>Reviews</h2>
            <div class="game-page-game-reviews-grid">
              <LazyOrganismsGamesReviewsCard
                v-for="review in game?.reviews"
                :key="review.id"
                :review="review"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGames } from "~/services/game.service";
import { useRoute } from "vue-router";
import type { GameWithStats } from "~/types/games.type";
import { formatDate } from "~/utils";

const gamesService = useGames();
const route = useRoute();
const game = ref<GameWithStats>();
const isLoading = ref(false);

const coverImage = computed(() => {
  return getCoverImage(game.value?.images ?? []);
});

onMounted(async () => {
  isLoading.value = true;
  await gamesService
    .fetchGame(Number(route.params.id))
    .then(async (res) => {
      await gamesService
        .fetchGameStats(Number(route.params.id))
        .then((stats) => {
          game.value = {
            ...res,
            stats: {
              average_rating: stats.average_rating,
              total_reviews: stats.total_reviews,
              id: stats.id,
              title: res.title,
            },
          };
        });
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>
<style lang="scss" scoped>
.game-details-section {
  min-height: 90vh;
  .game-details-inner-section {
    .game-banner-section {
      height: 400px;
      background: var(--border-color); /* Fallback */
      position: relative;
      overflow: hidden;

      .game-banner-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      }

      .game-banner-inner-section {
        position: relative;
        z-index: 1;
        width: 90%;
        margin: 0 auto;
        .game-page-back-btn {
          cursor: pointer;
          position: relative;
          top: 2rem;
          left: 2rem;
          font-size: $text-sm;
          background: var(--bg-color);
          padding: 6px 14px;
          border-radius: 20px;
          box-shadow: 0px 4px 15px 0px $box-shadow-color;
          width: fit-content;
          font-weight: 500;
          color: var(--text-color-dark);
          @media (max-width: 767px) {
            left: 0;
          }
        }
      }
    }
    .game-details-content-section {
      padding: 1.5rem;
      width: 90%;
      margin: 0 auto;
      .game-details-inner-content-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .game-page-game-name {
          display: flex;
          align-items: center;
          gap: 1rem;
          .title-genre-name {
            font-weight: 600;
            color: #ffffff;
            background: var(--primary-color);
            padding: 12px 24px;
            border: 1px solid var(--primary-color);
            border-radius: 50px;
          }
        }
        .game-page-game-date,
        .game-page-game-rating {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .game-page-game-reviews {
          .game-page-game-reviews-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 20px;
            width: 70%;
            @media (max-width: 767px) {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
          }
        }
        .game-page-game-rating {
          .reviews {
            font-size: $text-sm;
            color: var(--text-color);
          }
        }
      }
    }
  }
}
</style>
