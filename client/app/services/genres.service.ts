import type {
  GenresResponse, Genre
} from "~/types/genre.type";
import { useApi } from "~/services/api";

export const useGenres = () => {
    const { apiFetch } = useApi();

    const fetchGenres = async () => {
        const response = await apiFetch<GenresResponse>(`/genres`);
        return [{ id: "", name: "All Genres" }, ...response.data]; // By default showing All Genres category
    };

    return {
        fetchGenres,
    };
}
