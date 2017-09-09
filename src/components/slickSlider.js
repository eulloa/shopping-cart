import React from 'react';
import Slider from 'react-slick';

const SlickSlider = (props) => {
		let settings = {
			dots: true,
			infinite: true,
			speed: 750,
      		slidesToShow: 1,
      		slidesToScroll: 1
		}

		let products = props.carouselProducts.filter((p) => p.featured === true)

		return (
			<Slider {...settings} className="slider">
				{products.map((product, i) => {
					return (
						<div key={i} className={i === 0 ? 'book': i === 1 ? 'music': ''}>
							<div className="shadow"></div>
							<div className="product-info">
								<h1>{product.name}</h1>
								<img src={'/img/' + product.images[0]} alt={product.description} />
							</div>
						</div>
					)
				})}
			</Slider>
		)
}

export default SlickSlider