import React from 'react';
import PropTypes from 'prop-types';

const PseudoModal = (props) => {
	return (
		<div className="portal">
			<button onClick={props.closePortal}>x</button>
			<h1>{props.message}</h1>
		</div>
	)
}

PseudoModal.defaultProps = {
	message: 'Added to cart!'
}

PseudoModal.PropTypes = {
	message: PropTypes.string.isRequired
}

export default PseudoModal