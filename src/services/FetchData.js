import axios from "axios";

export const FetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
      const pokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          return detailedResponse.data;
        })
      );
      return pokemons;
    } catch (error) {
      throw new Error("Error fetching data. Please try again later.");
    }
  };
