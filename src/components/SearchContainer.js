import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPokemonAction } from "../actions/SearchPokemon";

export function SearchContainer(props) {
  // console.log(props);
  const [searchInput, setSearchInput] = useState("bulbasaur");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const handleSearch = () => {
    console.log("SEARCHING", searchInput);
    props.searchPokemon(searchInput);
  };

  return (
    <div>
      <input name="searchInput" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
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
