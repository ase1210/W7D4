import React from 'react';
import pokemonReducer from '../../reducers/pokemon_reducer';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.pokeId)
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.pokeId !== oldProps.match.params.pokeId) {
      this.props.requestPoke(this.props.match.params.pokeId)
    }
  }

  render () {
    if (!this.props.poke) {
      return null
    }
    return (
      <ul>
        <img src={this.props.poke.image_url} />
        <li>{this.props.poke.name}</li>
        <li>Type: {this.props.poke.poke_type}</li>
        <li>Attack {this.props.poke.attack}</li>
        <li>Defense: {this.props.poke.defense}</li>
        <li>Moves: {this.props.poke.moves}</li>
      </ul>
    )
  };
};

export default PokemonDetail;