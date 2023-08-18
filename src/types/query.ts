export type QueryOptions = {
  method: string,
  url: string,
  params: Params
}

export type Params = {
  key: string,
  secret: string,
  from: string,
  to: string,
}