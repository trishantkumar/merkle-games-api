export interface ApiResourceResponse<T> {
  data: T
}

export interface Genre {
  id: number
  name: string
}

export interface Company {
  id: number
  name: string
  country?: string
  founded_year?: string
}

export interface Image {
  id: number
  image_url?: string
  image_type?: string
}

export interface User {
  id: number
  username: string
}

export interface Review {
  id: number
  game_id: number
  user_id: number
  rating: number
  review_text: string | null
  user?: User
}

export interface Game {
  id: number
  title: string
  description: string | null
  release_date: string
  platform: string | null
  genre_id: number
  developer_id: number | null
  publisher_id: number | null
  genre?: Genre
  developer?: Company
  publisher?: Company
  images?: Image[]
  reviews?: Review[]
}

export interface GameStats {
  id: number
  title: string
  average_rating: number
  total_reviews: number
}

export interface GameWithStats extends Game {
  stats: GameStats
}

export type SortOption = 'rating' | 'date'
export type SortDirection = 'asc' | 'desc'

export interface SortState {
  by: SortOption
  direction: SortDirection
}

export interface DateRange {
  from: string // YYYY-MM-DD
  to: string   // YYYY-MM-DD
}
