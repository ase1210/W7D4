import React from 'react';

class PokemonIndex extends React.Component{
  
  componentDidMount() {
    this.props.requestAllPokemon()
  }
  
  render () {
   return (
    <ul>
      {this.props.pokemon.map((poke, idx) => (
      <li key={poke.id}>
        <span>{idx + 1}</span>
        <span><img src={poke.image_url}></img></span>
        <span>{poke.name}</span>
      </li>
    ))}
    </ul>)
  };
}

export default PokemonIndex;
