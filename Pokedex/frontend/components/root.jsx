import React from 'react';
import { Provider } from 'react-redux';
import { PokemonIndexContainer } from './pokemon/pokemon_index_container';

// why is store deconst below?
export const Root = ({ store }) => (
  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
);