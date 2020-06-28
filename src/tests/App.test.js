import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders successfully", () => {
    expect(app).toMatchSnapshot();
  });

  it("Contains the List component", () => {
    expect(app.find("Connect(AllPokemonList)").exists()).toBe(true);
  });
});
