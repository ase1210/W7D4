import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectPoke} from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';


const mapStateToProps = state => ({
  poke: selectPoke(state, this.props.match.params.pokeId)
});

const mapDispatchToProps = dispatch => ({
  requestPoke: () => (dispatch(requestPoke()))
});

export const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)