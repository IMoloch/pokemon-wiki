export {}

declare global {
  interface Pokemon {
    id: number,
    name: string,
    image: string,
    stats: Stat[],
    types: Type[],
    matchUps?: MatchUp[],
  }
  
  interface Stat {
    name: string,
    base_stat: number,
  }

  interface Type {
    name: string,
    imgUrl: string,
  }

  interface MatchUp {
    name: string,
    score: number,
    imgUrl?: string,
  }

  interface User {
    email: string,
    password: string,
  }
}