

export interface ApiResult {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: null | number;
  year_end: null;
  games: Game[];
}

interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}