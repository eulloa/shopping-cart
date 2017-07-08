import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './header';
import ProductGrid from './productGrid';
import Carousel from './carousel';
import Cart from './cart';
import NotFound from './notFound';
import Portal from 'react-portal';
import PseudoModal from './pseudoModal';
import PseudoModalConnect from './pseudoModalConnect';
import Footer from './footer';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange = (e) => {
		this.props.setCategoryFilter(e.target.value.toUpperCase())
	}

	render() {
		return (
			<main>
				<Header onChange={this.handleOnChange} {...this.props} />
				<Carousel carouselProducts={this.props.allProducts} {...this.props} />
				<Switch>
					<Route exact path="/" component={() => <ProductGrid {...this.props} />}/>
					<Route exact path="/cart" component={() => <Cart {...this.props} />}/>
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