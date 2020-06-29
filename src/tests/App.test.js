import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders successfully", () => {
    expect(app).toMatchSnapshot();
  });

  it("Contains the List component", () => {
    expect(app.find("Connect(AllPokemonList)")).toHaveLength(0);
  });
});
