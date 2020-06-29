import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPokemonAction } from "../actions/index";
import { Segment, Input, Button } from "semantic-ui-react";

const square = {
  width: "40%",
  height: 175,
  margin: "auto",
  textAlign: "center",
};

export function SearchContainer(props) {
  const [searchInput, setSearchInput] = useState("bulbasaur");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    props.searchPokemon(searchInput);
  };

  return (
    <Segment style={square}>
      <h2>Search Pokemon</h2>
      <Input name="searchInput" onChange={handleChange} />
      <br />
      <br />
      <Button primary onClick={handleSearch}>
        Search
      </Button>
    </Segment>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state,
  };
};

const mapDispatchToProps = {
  searchPokemon: searchPokemonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
