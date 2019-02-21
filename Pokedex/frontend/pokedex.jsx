import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

window.selectAllPokemon = selectAllPokemon
window.requestAllPokemon = requestAllPokemon

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore()
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Pokedex</h1>, root);
});
