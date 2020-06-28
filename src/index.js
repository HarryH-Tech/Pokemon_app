import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import PokemonReducer from "./reducers/PokemonReducer";
import { Provider } from "react-redux";
import App from "./App";
import thunk from "redux-thunk";

const store = createStore(PokemonReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
