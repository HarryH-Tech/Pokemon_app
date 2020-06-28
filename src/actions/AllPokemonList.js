import { GET_ALL_POKEMON } from "./constants";

export const getAllPokemonAction = () => {
  return (dispatch) => {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => response.json())
      .then((json) => {
        console.log("HI", json.results);
        return dispatch({ type: GET_ALL_POKEMON, allPokemon: json.results });
      });
  };
};
