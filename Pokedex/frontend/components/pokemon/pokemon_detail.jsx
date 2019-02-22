import React from 'react';
import pokemonReducer from '../../reducers/pokemon_reducer';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.pokeId)
  }

  render () {
    return (
      <ul>
        <li><img src={poke.image_url} /></li>
        <li>{poke.name}</li>
        <li>Type: {poke.type}</li>
        <li>Attack {poke.attack}</li>
        <li>Defense: {poke.defense}</li>
        <li>Moves: {poke.moves}</li>
      </ul>
    )
  };
};

export default PokemonDetail;