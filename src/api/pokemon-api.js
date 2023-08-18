class PokemonAPI {
    constructor() {
      this.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    }
  
    async getRandomPokemon() {
      const randomId = Math.floor(Math.random() * 200) + 1; // There are 898 pokemons in total
      const url = `${this.baseURL}/${randomId}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }
  } export {PokemonAPI}
  