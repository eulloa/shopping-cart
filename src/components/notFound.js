import React from 'react';

const NotFound = (props) => {
	return (
		<div>Oops! Your search for "{props.location.pathname}" could not be found, please try again!</div>
	)
}

export default NotFound