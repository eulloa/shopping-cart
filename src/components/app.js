import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions';
import Main from './main';

const mapStateToProps = (state) => {
	return {
		allProducts: state.allProducts,
		shoppingCart: [],
		visibilityFilter: state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;