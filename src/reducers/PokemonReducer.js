import { GET_ALL_POKEMON, SEARCH_POKEMON } from "../actions/constants";

const PokemonReducer = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        allPokemon: action.allPokemon,
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon,
      };

    default:
      return state;
  }
};

export default PokemonReducer;
