import React from 'react';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.sumTotalPrice = this.sumTotalPrice.bind(this);
    }

    sumTotalPrice = () => {
        let total = 0;
        this.props.shoppingCart.forEach((item) => {
            total += item.qty * item.price;
        })
        return total.toFixed(2);
    }

    render() {
        let totalItems = this.props.totalCartItems;

        return (
            <div className="sidebar">
                <h1>Subtotal: ({totalItems} {totalItems === 1 ? ' item' : ' items'}) <span>${this.sumTotalPrice()}</span></h1>
            </div>
        )
    }
}

Sidebar.propTypes = {
    totalCartItems: PropTypes.number.isRequired
}

export default Sidebar;