<template>
  <div class="games-review-card-container">
    <div class="games-review-card-inner-container">
      <div class="games-review-card-user-section">
        <div class="games-review-card-user-section-left">
          <div class="games-review-card-user-avatar"><AtomsIcon name="user" /></div>
          <div class="games-review-card-user-name">
            {{ review?.user?.username }}
          </div>
        </div>
        <div class="game-review-card-rating"><AtomsIcon name="star" /> {{ review?.rating }}</div>
      </div>
      <div class="games-review-card-content-section">
        {{ review?.review_text }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Review } from "~/types/games.type";

interface Props {
  review: Review;
}

const props = defineProps<Props>();

const { review } = toRefs(props);
</script>
<style lang="scss" scoped>
.games-review-card-container {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: 0px 4px 15px 0px $box-shadow-color;
  border-radius: 20px;
  padding: 1.5rem;
  .games-review-card-inner-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .games-review-card-user-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: $text-sm;
      .games-review-card-user-section-left {
        display: flex;
        align-items: center;
        gap: 8px;
        .games-review-card-user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--bg-color);
          box-shadow: 0px 4px 15px 0px $box-shadow-color;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $text-sm;
          color: var(--text-color-dark);
        }
        .games-review-card-user-name {
          font-weight: 600;
          font-size: $text-lg;
        }
      }
      .game-review-card-rating {
        display: flex; align-items: center; gap: 4px;
      }
    }
    .games-review-card-content-section {
      font-size: $text-sm;
      font-weight: 400;
    }
  }
}
</style>
