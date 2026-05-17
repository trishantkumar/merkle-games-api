<template>
  <div>
    <section class="actions-section">
      <div class="action-left">
        <div class="search-action">
          <div class="search-input">
            <span class="search-icon-wrapper">
              <AtomsIcon name="search" class="search-icon" />
            </span>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search games"
              aria-label="Search games"
            />
          </div>
        </div>
        <div class="sort-action">
          <div class="sort-input">
            <span class="icon-wrapper">
              <AtomsIcon name="filter" class="action-icon" />
            </span>
            <select v-model="selectedGenre" aria-label="Filter by genre">
              <option
                :value="genre.id"
                v-for="(genre, index) in genres"
                :key="'genres' + index"
              >
                {{ genre?.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="action-right">
        <div class="filter-action">
          <div class="filter-selection">
            <div
              class="filter-top-rated"
              @click="sort = 'rating'"
              :class="{ selected: sort === 'rating' }"
              :style="{ 'padding-left': sort === 'rating' ? '' : '15px' }"
            >
              <AtomsIcon name="star" /> Top Rated
            </div>
            |
            <div
              class="filter-date-wise"
              @click="sort = 'date'"
              :class="{ selected: sort === 'date' }"
              :style="{ 'padding-right': sort === 'date' ? '' : '15px' }"
            >
              <AtomsIcon name="calendar" /> Date wise
            </div>
          </div>
        </div>
        <div class="games-count">{{ gamesCount }} Games</div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useGenres } from "~/services/genres.service";
import { useGameStore } from "~/store/game.store";
import type { Genre } from "~/types/genre.type";

const searchQuery = ref("");
const sort = ref<"rating" | "date">("rating");
const gamesCount = ref(15);
const genresService = useGenres();
const genres = ref<Genre[]>([]);
const selectedGenre = ref<number | string>("");
const gameStore = useGameStore();

let searchTimeout: any;
const debounce = (value: string) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    gameStore.setSearchQuery(value as unknown as string);
  }, 500);
};

watch(
  () => sort.value,
  (newSort) => {
    gameStore.setSortingtype(newSort);
  },
);

watch(
  () => selectedGenre.value,
  (newGenre) => {
    gameStore.setGenreFilter(newGenre as unknown as number);
  },
);

watch(
  () => searchQuery.value,
  (newSearchQuery) => {
    debounce(newSearchQuery);
  },
);

onMounted(async () => {
  await genresService.fetchGenres().then((res) => {
    genres.value = res as unknown as Genre[];
  });
});
</script>
<style lang="scss" scoped>
.actions-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 10px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .action-left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      .search-input {
        input {
          width: 100%;
        }
      }
      .sort-action {
        select {
          width: 100%;
        }
      }
    }
    .action-right {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      .filter-action {
        .filter-selection {
          div {
            width: 100%;
          }
        }
      }
      .games-count {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
  .action-left {
    display: flex;
    gap: 10px;
    .search-action {
      .search-input {
        border: 1px solid $border-color;
        border-radius: 50px;
        padding: 12px 24px;
        display: flex;
        gap: 10px;
        align-items: center;
        .search-icon-wrapper {
          display: flex;
          align-items: center;
          .search-icon {
            width: 24px;
            height: 24px;
            color: var(--search-icon-color);
            transition: color 0.3s ease;
          }
        }
        input {
          border: none;
          outline: none;
          font-size: $text-sm;
          font-weight: 400;
          color: var(--text-color);
          background: transparent;
          &::placeholder {
            color: var(--search-icon-color);
            transition: color 0.3s ease;
          }
        }
      }
    }
    .sort-action {
      .sort-input {
        border: 1px solid $border-color;
        border-radius: 50px;
        padding: 12px 24px;
        display: flex;
        gap: 10px;
        align-items: center;
        .icon-wrapper {
          display: flex;
          align-items: center;
          .action-icon {
            width: 24px;
            height: 24px;
            color: var(--search-icon-color);
            transition: color 0.3s ease;
          }
        }
        select {
          border: none;
          outline: none;
          font-size: $text-sm;
          font-weight: 400;
          color: var(--text-color);
          background: transparent;
          cursor: pointer;
        }
      }
    }
  }
  .action-right {
    display: flex;
    gap: 10px;
    .filter-action {
      .filter-selection {
        display: flex;
        border: 1px solid $border-color;
        border-radius: 50px;
        padding: 4px;
        gap: 10px;
        align-items: center;
        .filter-top-rated,
        .filter-date-wise {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: center;
        }
        .selected {
          font-weight: 600;
          color: #ffffff;
          background: var(--primary-color);
          padding: 12px 24px;
          border: 1px solid var(--primary-color);
          border-radius: 50px;
        }
      }
    }
    .games-count {
      width: fit-content;
      font-weight: bold;
      line-height: 38px;
      color: var(--text-color);
      padding: 6px 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
