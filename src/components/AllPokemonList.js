import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllPokemonAction } from "../actions/index";

import { Link } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";

const container = {
  width: "30%",
  margin: "10px auto",
  textAlign: "center",
};
export function AllPokemonList(props) {
  const { allPokemon } = props;

  useEffect(() => {
    props.getAllPokemon();
  }, []);

  console.log(allPokemon);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h2>POKEMON LIST</h2>
      <Grid>
        {allPokemon
          ? allPokemon.map((pokemon) => {
              return (
                <Segment style={container}>
                  <Link to={`pokemon/${pokemon.name}`}>
                    <h1>{capitalize(pokemon.name)}</h1>
                  </Link>
                </Segment>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allPokemon: state.allPokemon,
  };
};

const mapDispatchToProps = {
  getAllPokemon: getAllPokemonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemonList);
