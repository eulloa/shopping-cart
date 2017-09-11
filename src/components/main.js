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

		this.totalCartItems = this.totalCartItems.bind(this);
	}

	totalCartItems = () => {
		let cart = this.props.shoppingCart
		let count = 0
		cart.forEach((item) => {
			count += item.qty
		})
		return count
	}

	render() {
		return (
			<main>
				<Header {...this.props} totalCartItems={this.totalCartItems()} />
				<Switch>
					<Route exact path="/" component={() => <ProductGrid {...this.props} />}/>
					<Route exact path="/cart" component={() => <ShoppingCart {...this.props} totalCartItems={this.totalCartItems()} />}/>
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