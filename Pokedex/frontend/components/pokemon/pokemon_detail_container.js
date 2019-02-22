import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectPoke} from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';


const mapStateToProps = (state, ownProps) => ({
  poke: state.entities.pokemon[ownProps.match.params.pokeId]
});

const mapDispatchToProps = dispatch => ({
  requestPoke: (id) => (dispatch(requestPoke(id)))
});

export const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)