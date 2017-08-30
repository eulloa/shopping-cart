import React from 'react';
import { Link } from 'react-router-dom';

class ProductSingleView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImg: ''
		}

		this.updateImage = this.updateImage.bind(this);
		this.getProduct = this.getProduct.bind(this);
		this.highlightActive = this.highlightActive.bind(this);
	}

	updateImage = (img) => {
		this.setState({
			currentImg: img
		})
	}

	getProduct = () => {
		let product = this.props.allProducts.find((p) => p.productID === parseInt(this.props.match.params.productID, 10))
		
		if (product == null) {
			product = this.props.allProducts.find((p) => p.productID === 1)
		}

		return product;
	}

	highlightActive = (index) => {
		var listItems = document.getElementsByClassName('images')[0].childNodes;
		listItems.forEach((li, i) => {
			li.childNodes[0].classList.remove('active')

			if (index === i) {
				li.childNodes[0].classList.add('active')
			}
		})
	}

	componentWillMount() {
		this.setState({
			currentImg: this.getProduct().images[0]
		})
	}

	render() {
		let product = this.getProduct();

		return (
			<div className="product single-view">
				{ product.images.length > 1 &&
					<ul className="images child">
						{
							product.images.map((img, i) => {
								return (
									<li key={i}>
										<img className={i === 0 ? 'active' : ''} onMouseOver={() => { this.updateImage(img); this.highlightActive(i); }} src={'/img/' + img} alt={product.description} />
									</li>
								)
							})
						}
					</ul>
				}
				<section className="child">
					<h4>{product.category}</h4>
					<figure>
						<img src={'/img/' + this.state.currentImg} alt={product.description} />
					</figure>
					<div>
						<h1>{product.name}</h1>
						<h2><sup>$</sup>{product.price}</h2>
						<h3>{product.description}</h3>
						<ul>
							{product.features.map((feature, i) => {
								return <li key={i}>{feature}</li>
							})}
						</ul>
						<button className="button" onClick={() => { this.props.addToCart(product); this.props.setModalVisibility(true) }}>Add to cart</button>
						<Link className="button" to='/'>Back</Link>
					</div>
				</section>
			</div>
		)
	}
}

export default ProductSingleView