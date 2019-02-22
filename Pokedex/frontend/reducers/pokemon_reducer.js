import {RECEIVE_ALL_POKEMON, RECEIVE_POKE} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_POKE:
      newState = Object.assign(newState, state)
      newState[action.poke.id] = action.poke
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;