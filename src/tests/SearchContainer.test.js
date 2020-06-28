import React from "react";
import { shallow } from "enzyme";
import { SearchContainer } from "../components/SearchContainer";

describe("Search Container", () => {
  let searchContainer = shallow(<SearchContainer />);

  it("renders successfully", () => {
    expect(searchContainer).toMatchSnapshot();
  });

  //   it("Contains the List component", () => {
  //     expect(app.find("Connect(AllPokemonList)").exists()).toBe(true);
  //   });
});
