import moment from "moment";
import type { Image } from "~/types/games.type";

export const getRating = (rating: number): string => {
  return rating?.toFixed(1) || "0.0";
};

export const formatDate = (date: string): string => {
  return moment(date).format("MMMM Do YYYY");
};

export const getCoverImage = (images: Image[]): string => {
  const coverImage =
    images?.find((image) => image.image_type === "Cover")?.image_url || "";
  const mediaBase = useRuntimeConfig().public.mediaBase;
  return coverImage ? `${mediaBase}${coverImage}` : "/images/fallback.png";
};
