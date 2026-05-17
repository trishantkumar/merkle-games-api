import type {
  Game,
  GameStats,
  GameWithStats,
  ApiResourceResponse,
  DateRange,
} from "~/types/games.type";
import { useApi } from "~/services/api";

export const useGames = () => {
  const { apiFetch } = useApi();

    const shuffleArray = <T>(array: T[]): T[] => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j] as T, arr[i] as T];
      }
      return arr;
    };

  const fetchGameIdsByDateRange = async (
    range: DateRange,
  ): Promise<number[]> => {
    const response = await apiFetch<{ ids: number[] }>(
      `/games/by-date-range?from=${range.from}&to=${range.to}`,
    );
    return response.ids;
  };

  const fetchGame = async (id: number): Promise<Game> => {
    const response = await apiFetch<ApiResourceResponse<Game>>(`/games/${id}`);
    return response.data;
  };

  const fetchGameStats = async (id: number): Promise<GameStats> => {
    const response = await apiFetch<ApiResourceResponse<GameStats>>(
      `/games/${id}/stats`,
    );
    return response.data;
  };

  const fetchRandomGamesWithStats = async (
    count: number = 15,
    range: DateRange = { from: "2015-01-01", to: "2017-12-31" },
  ): Promise<GameWithStats[]> => {
    const allIds = await fetchGameIdsByDateRange(range);
    const shuffled = shuffleArray(allIds);
    const selectedIds = shuffled.slice(0, count);

    // Fetch game details and stats in parallel
    const results = await Promise.allSettled(
      selectedIds.map(async (id) => {
        const [game, stats] = await Promise.all([
          fetchGame(id),
          fetchGameStats(id),
        ]);
        return { ...game, stats } satisfies GameWithStats;
      }),
    );

    return results
      .filter(
        (r): r is PromiseFulfilledResult<GameWithStats> =>
          r.status === "fulfilled",
      )
      .map((r) => r.value);
  };

  return {
    fetchGame,
    fetchGameStats,
    fetchRandomGamesWithStats,
    fetchGameIdsByDateRange,
    shuffleArray,
  };
}
