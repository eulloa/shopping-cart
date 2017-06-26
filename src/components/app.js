import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as actionCreators from '../actions/actions';
import Main from './main';

const mapStateToProps = (state) => {
	return {
		allProducts: state.allProducts,
		shoppingCart: [],
		visibilityfilter: state.visibilityfilter
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;