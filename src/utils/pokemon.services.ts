/* eslint-disable no-useless-catch */
import axios from 'axios';

export class PokemonService {
  pokemonData: Pokemon = { id: 0, name: '', image: '', stats: [], types: [], matchUps: [] };
  BASE_URL: string = import.meta.env.VITE_PKMN_BASEURL;
  allTypes: any[] = [];

  constructor() {}

  async getFormattedData(pokeId: string | string[]) {
    try {
      this.pokemonData = await this.getPokeInfo(pokeId);
      this.pokemonData.matchUps = await this.getAllTypes();
      for (const type of this.pokemonData.types) {
        type.imgUrl = await this.getTypeImg(type.name);
        await this.getMatchUps(type.name);
      }
    } catch (error) {
      throw error;
    }
    return this.pokemonData;
  }

  async getPokeInfo(pokeId: string | string[]) {
    try {
      const res = await axios.get(this.BASE_URL + '/pokemon/' + pokeId);
      // Destrucutramos la respuesta para que se acomode a las interfaces
      const {
        id,
        name,
        sprites: {
          other: {
            'official-artwork': { front_default },
          },
        },
        stats,
        types,
      } = res.data;
      const baseStats = stats.map((stat: any) => ({
        base_stat: stat.base_stat,
        name: stat.stat.name,
      }));
      const formattedTypes = types.map((type: any) => ({
        name: type.type.name,
      }));
      return { id, name, image: front_default, stats: baseStats, types: formattedTypes };
    } catch (error) {
      throw error;
    }
  }

  async getAllTypes() {
    try {
      const res = await axios.get(this.BASE_URL + '/type');
      const { results } = res.data;
      results.splice(-2);
      const formattedTypes = results.map((type: any) => ({
        name: type.name,
        score: 0,
      }));
      for (const type of formattedTypes) {
        type.imgUrl = await this.getTypeImg(type.name);
      }
      return formattedTypes;
    } catch (error) {
      throw error;
    }
  }

  async getTypeImg(type: string) {
    try {
      const res = await axios.get(this.BASE_URL + '/type/' + type);
      return res.data.sprites['generation-ix']['scarlet-violet']['name_icon'];
    } catch (error) {
      throw error;
    }
  }

  async getMatchUps(type: string) {
    try {
      const res = await axios.get(this.BASE_URL + '/type/' + type);
      const { double_damage_from, double_damage_to, half_damage_from, half_damage_to, no_damage_from, no_damage_to } = res.data.damage_relations;
      this.pokemonData.matchUps?.forEach((pkmType) => {
        double_damage_from.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score -= 1) : null;
        double_damage_to.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score += 1) : null;
        half_damage_from.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score += 1) : null;
        half_damage_to.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score -= 1) : null;
        no_damage_from.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score += 2) : null;
        no_damage_to.find((enemyType: any) => enemyType.name === pkmType.name) ? (pkmType.score -= 2) : null;
      });
    } catch (error) {
      throw error;
    }
  }
}
