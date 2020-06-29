import {
  GET_ALL_POKEMON,
  SEARCH_POKEMON,
  GET_SINGLE_POKEMON,
} from "../actions/constants";

const PokemonReducer = (state = [], action) => {
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

    case GET_SINGLE_POKEMON:
      return {
        ...state,
        singlePokemon: action.singlePokemon,
      };

    default:
      return state;
  }
};

export default PokemonReducer;
