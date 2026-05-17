import { defineStore } from "pinia";
import type { GameWithStats } from "~/types/games.type";

export const useGameStore = defineStore("game", () => {
  const games = ref<GameWithStats[]>([]);
  const sortCriteria = ref<"rating" | "date">("rating");
  const genreFilter = ref<number | null>(null);
  const searchQuery = ref<string>("");

  const setGames = (newGames: GameWithStats[]) => {
    games.value = newGames;
  };

  const setSortingtype = (sort: "rating" | "date") => {
    sortCriteria.value = sort;
  };

  const setGenreFilter = (genre: number | null) => {
    genreFilter.value = genre;
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const displayGames = computed(() => {
    let sortArr = games.value;
    if (searchQuery.value) {
       sortArr = sortArr.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );
    }
    if (sortCriteria.value === "rating") {
      sortArr = [...sortArr].sort(
        (a, b) => b.stats.average_rating - a.stats.average_rating,
      );
    } else {
      sortArr = [...sortArr].sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime(),
      );
    }

    if (genreFilter.value) {
      sortArr = sortArr.filter((game) => game?.genre?.id === genreFilter.value);
    }
    return sortArr;
  });

  return { games, setGames, setSortingtype, displayGames, setGenreFilter, setSearchQuery };
});
