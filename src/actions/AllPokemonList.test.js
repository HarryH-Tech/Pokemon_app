import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { GET_ALL_POKEMON } from "./constants";
import { getAllPokemon } from "./AllPokemonList";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ allPokemon: {} });

const mockResponse = { results: [] };

fetchMock.get("https://pokeapi.co/api/v2/pokemon/?limit=151", mockResponse);

it("creates an async action to fetch pokemon", () => {
  const expectedActions = [
    {
      allPokemon: mockResponse.results,
      type: GET_ALL_POKEMON,
    },
  ];

  return store.dispatch(getAllPokemon()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
