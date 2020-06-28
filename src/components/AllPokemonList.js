import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllPokemonAction } from "../actions/AllPokemonList";

export function AllPokemonList(props) {
  console.log(props);

  const { allPokemon } = props;

  useEffect(() => {
    props.getAllPokemon();
  }, []);

  console.log(allPokemon);

  return (
    <div>
      <h2>POKEMON LIST</h2>
      {allPokemon
        ? allPokemon.map((pokemon) => {
            return <p>{pokemon.name}</p>;
          })
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allPokemon: state.allPokemon,
  };
};

const mapDispatchToProps = {
  getAllPokemon: getAllPokemonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemonList);
