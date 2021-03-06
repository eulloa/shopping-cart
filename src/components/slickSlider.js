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

		let products = props.carouselProducts.filter((p) => p.featured)

		return (
			<Slider {...settings} className="slider">
				{products.map((product, i) => {
					return (
						<div key={i} className={i === 0 ? 'book': i === 1 ? 'music': i === 2 ? 'shoes': ''}>
							<div className="shadow"></div>
							<div className="product-info">
								<figure>
									<img src={'/img/' + product.images[0]} alt={product.description} />
								</figure>
								<section>
									<h1>{product.name}</h1>
									<h2>{product.featured.description}</h2>
								</section>
							</div>
						</div>
					)
				})}
			</Slider>
		)
}

export default SlickSlider