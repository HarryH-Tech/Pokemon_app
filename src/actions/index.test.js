import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { GET_ALL_POKEMON, SEARCH_POKEMON } from "./constants";
import { getAllPokemonAction, searchPokemonAction } from ".";

/*********ALL POKEMON LIST **********/
const createMockStore = configureMockStore([thunk]);
const allPokemonStore = createMockStore({ allPokemon: {} });
const allPokemonMockResponse = { results: [] };

fetchMock.get(
  "https://pokeapi.co/api/v2/pokemon/?limit=151",
  allPokemonMockResponse
);

it("creates an async action to fetch all pokemon", () => {
  const expectedActions = [
    {
      allPokemon: allPokemonMockResponse.results,
      type: GET_ALL_POKEMON,
    },
  ];

  return allPokemonStore.dispatch(getAllPokemonAction()).then(() => {
    expect(allPokemonStore.getActions()).toEqual(expectedActions);
  });
});

/*********SEARCH POKEMON **********/

const searchPokemonStore = createMockStore({ pokemon: {} });
const searchPokemonMockResponse = { abilities: [], forms: [] };
const pokemonName = "bulbasaur";

fetchMock.get(
  `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  searchPokemonMockResponse
);

it("creates an action to fetch a specific pokemon", () => {
  const expectedActions = [
    {
      pokemon: searchPokemonMockResponse,
      type: SEARCH_POKEMON,
    },
  ];

  return searchPokemonStore
    .dispatch(searchPokemonAction(pokemonName))
    .then(() => {
      expect(searchPokemonStore.getActions()).toEqual(expectedActions);
    });
});

/********* SINGLE POKEMON **********/
