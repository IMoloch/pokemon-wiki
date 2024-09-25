export {}

declare global {
  interface Pokemon {
    name: string,
    image: string,
    stats: Stat[]
  }
  
  interface Stat {
    base_stat: number,
    name: string,
  }

  interface User {
    email: string,
    password: string
  }
}