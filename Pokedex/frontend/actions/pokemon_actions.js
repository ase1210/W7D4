import * as ContactAPIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  ContactAPIUtil.fetchAllPokemon().then((pokemon) => (
    dispatch(receiveAllPokemon(pokemon)))
  )
}

export const receivePoke = ({poke, items}) => ({
  type: RECEIVE_POKE,
  poke,
  items
});

export const requestPoke = (id) => (dispatch) => {
  ContactAPIUtil.fetchPoke(id).then((payload) => (
    dispatch(receivePoke(payload)))
  )
}
