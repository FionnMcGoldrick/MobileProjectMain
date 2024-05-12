export interface ApiResult {
  count: number;
  next: string;
  previous: null;
  results: GameResult[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
}

interface Filters {
  years: Year2[];
}

interface Year2 {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: Year[];
  nofollow: boolean;
  count: number;
}

interface Year {
  year: number;
  count: number;
  nofollow: boolean;
}

export interface GameResult {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Addedbystatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform2[];
  parent_platforms: Parentplatform[];
  genres: Genre[];
  stores: Store2[];
  clip: null;
  tags: Tag[];
  esrb_rating: Platform3;
  short_screenshots: Shortscreenshot[];
}

interface Shortscreenshot {
  id: number;
  image: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

interface Store2 {
  id: number;
  store: Store;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Parentplatform {
  platform: Platform3;
}

interface Platform3 {
  id: number;
  name: string;
  slug: string;
}

interface Platform2 {
  platform: Platform;
  released_at: string;
  requirements_en: Requirementsen | Requirementsen2 | null | null | null;
  requirements_ru: Requirementsen | null | null;
}

interface Requirementsen2 {
  minimum: string;
}

interface Requirementsen {
  minimum: string;
  recommended: string;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: null | null | number;
  games_count: number;
  image_background: string;
}

interface Addedbystatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}


export interface DetailsGameResult {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: Metacriticplatform[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  reactions: Reactions;
  added: number;
  added_by_status: Addedbystatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: Parentplatform[];
  platforms: Platform4[];
  stores: Store2[];
  developers: Developer[];
  genres: Developer[];
  tags: Tag[];
  publishers: Developer[];
  esrb_rating: Platform2;
  clip: null;
  description_raw: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Store2 {
  id: number;
  url: string;
  store: Store;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

interface Platform4 {
  platform: Platform3;
  released_at: string;
  requirements: Requirements;
}

interface Requirements {
  minimum?: string;
  recommended?: string;
}

interface Platform3 {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: null | number;
  games_count: number;
  image_background: string;
}

interface Platform2 {
  id: number;
  name: string;
  slug: string;
}

interface Addedbystatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

interface Reactions {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  '12': number;
  '13': number;
  '14': number;
  '15': number;
  '16': number;
  '18': number;
  '20': number;
  '21': number;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface Metacriticplatform {
  metascore: number;
  url: string;
  platform: Platform;
}

interface Platform {
  platform: number;
  name: string;
  slug: string;
}