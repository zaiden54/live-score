export type ApiReturnType = {
  success: boolean, 
  data: ResponseData,
}

export type ResponseData = {
  match: MatchType[],
  next_page: string,
  prev_page: boolean | string,
  total_pages: number,
}

export type MatchType = {
  last_changed: string
  ft_score: string
  et_score: string
  location: string
  scheduled: string
  away_name: string
  status: string
  ht_score: string
  competition_id: number
  time: string
  away_id: number
  home_name: string
  has_lineups: boolean
  home_id: number
  date: string
  ps_score: string
  score: string
  events: string
  id: number
  fixture_id: number
  h2h: string
  league_id: number
  competition_name: string
  added: string
}