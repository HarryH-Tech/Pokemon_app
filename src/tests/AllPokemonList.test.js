import React from "react";
import { shallow, mount } from "enzyme";
import { AllPokemonList } from "../components/AllPokemonList";

describe("All Pokemon List", () => {
  let props = { pokemon: [] };
  let list = shallow(<AllPokemonList {...props} />);

  it("renders successfully", () => {
    expect(list).toMatchSnapshot();
  });

  describe("When List mounts", () => {
    const mockGetAllPokemon = jest.fn();

    beforeEach(() => {
      props.getAllPokemon = mockGetAllPokemon;
      list = mount(<AllPokemonList {...props} />);
    });

    it("dispatches the `getAllPokemon()` method it receives from props", () => {
      expect(mockGetAllPokemon).toHaveBeenCalled();
    });
  });
});
