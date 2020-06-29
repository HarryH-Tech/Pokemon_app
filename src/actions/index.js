import { GET_ALL_POKEMON, SEARCH_POKEMON } from "./constants";

export const getAllPokemonAction = () => {
  return (dispatch) => {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151", {})
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: GET_ALL_POKEMON, allPokemon: json.results });
      });
  };
};

export const searchPokemonAction = (pokemonName) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: SEARCH_POKEMON, pokemon: json });
      });
  };
};

export const getSinglePokemonAction = (pokemonName) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: SEARCH_POKEMON, singlePokemon: json });
      });
  };
};
