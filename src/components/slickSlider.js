import React from 'react';
import Slider from 'react-slick';

class SlickSlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let settings = {
			dots: true,
			infinite: true,
			speed: 750,
      		slidesToShow: 1,
      		slidesToScroll: 1
		}

		let products = this.props.carouselProducts.filter((p) => p.featured === true)

		return (
			<Slider {...settings}>
				{products.map((product, i) => {
					return (
						<div key={i}>
							<h1>{product.name}</h1>
							<img src={'/img/' + product.imgSrc} alt={product.description} />
						</div>
					)
				})}
			</Slider>
		)
	}
}

export default SlickSlider