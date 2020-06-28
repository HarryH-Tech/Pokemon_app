import { SEARCH_POKEMON } from "./constants";

export const searchPokemonAction = (pokemonName) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return dispatch({ type: SEARCH_POKEMON, pokemon: json });
      });
  };
};
