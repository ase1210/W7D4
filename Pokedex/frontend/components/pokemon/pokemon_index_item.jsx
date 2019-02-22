import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonItem = ({ poke, idx }) => (
  <li>
    <Link to={`/pokemon/${poke.id}`}>
      <span>{idx + 1}</span>
      <span><img src={poke.image_url}></img></span>
      <span>{poke.name}</span>
    </Link>
  </li>
);