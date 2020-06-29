import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSinglePokemonAction } from "../actions";

function SinglePokemon(props) {
  console.log(props.match.params.name);
  console.log(props);

  useEffect(() => {
    props.getSinglePokemon(props.match.params.name);
  }, []);

  return <div>POKEMON</div>;
}

const mapStateToProps = (state) => {
  return {
    singlePokemon: state,
  };
};

const mapDispatchToProps = {
  getSinglePokemon: getSinglePokemonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
