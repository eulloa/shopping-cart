import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './header';
import ProductGrid from './productGrid';
import ProductSingleView from './productSingleView';
import Cart from './cart';
import NotFound from './notFound';
import Portal from 'react-portal';
import PseudoModal from './pseudoModal';
import PseudoModalConnect from './pseudoModalConnect';
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
					<Route exact path="/cart" component={() => <Cart {...this.props} />}/>
					<Route path="/product/:productID" render={({match}) => <ProductSingleView {...this.props} match={match} />} />
					<Route component={NotFound} />
				</Switch>
				<Portal	isOpened={this.props.isModalVisible}>
					<PseudoModalConnect>
						<PseudoModal />
					</PseudoModalConnect>
				</Portal>
				<Footer />
			</main>
		)
	}	
}

export default Main