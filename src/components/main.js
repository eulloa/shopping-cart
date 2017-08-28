import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './header';
import ProductGrid from './productGrid';
import ProductSingleView from './productSingleView';
import ShoppingCart from './shoppingCart';
import NotFound from './notFound';
import Portal from 'react-portal';
import PseudoModal from './pseudoModal';
import Footer from './footer';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<Header {...this.props} />
				<Switch>
					<Route exact path="/" component={() => <ProductGrid {...this.props} />}/>
					<Route exact path="/cart" component={() => <ShoppingCart {...this.props} />}/>
					<Route path="/product/:productID" render={({match}) => <ProductSingleView {...this.props} match={match} />} />
					<Route component={NotFound} />
				</Switch>
				<Portal	isOpened={this.props.isModalVisible}>
					<PseudoModal />
				</Portal>
				<Footer />
			</main>
		)
	}	
}

export default Main