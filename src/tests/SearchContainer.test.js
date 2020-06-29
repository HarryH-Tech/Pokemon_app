import React from "react";
import { shallow } from "enzyme";
import { SearchContainer } from "../components/SearchContainer";

describe("Search Container", () => {
  let searchContainer = shallow(<SearchContainer />);

  it("renders successfully", () => {
    expect(searchContainer).toMatchSnapshot();
  });

  it("displays the correct search heading text", () => {
    expect(searchContainer.find("h2").text()).toEqual("Search Pokemon");
  });
});
