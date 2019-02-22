import React from 'react';
import { PokemonItem } from './pokemon_index_item';
import { Route } from 'react-router-dom';
import { PokemonDetailContainer } from './pokemon_detail_container';

class PokemonIndex extends React.Component{
  
  componentDidMount() {
    this.props.requestAllPokemon()
  }
  
  render () {

   return (
     <ul>
       <Route path="/pokemon/:pokeId" component={PokemonDetailContainer}/>
       {this.props.pokemon.map((poke, idx) => (
         <PokemonItem key={poke.id} poke={poke} idx={idx}/>
    ))}
    </ul>)
  };
}

export default PokemonIndex;
