import React from "react";

import AllPokemonList from "./components/AllPokemonList";
import SinglePokemon from "./components/SinglePokemon";
import SearchContainer from "./components/SearchContainer";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      {/* <AllPokemonList /> */}

      <SearchContainer />
      <Route exact path="/" component={AllPokemonList} />

      <Route exact path="/pokemon/:name" component={SinglePokemon} />
    </Router>
  );
}

export default App;
