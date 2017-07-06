import React from 'react';

const Footer = (props) => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>&copy; {year}</p>
		</footer>
	)
}

export default Footer