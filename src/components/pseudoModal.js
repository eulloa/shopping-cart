import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';

import { Animate } from 'react-move';

class PseudoModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				right: 250
			}
		}

		this.getWindowTop = this.getWindowTop.bind(this);
	}

	getWindowTop = () => {
		let doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.closePortal();
			this.props.setModalVisibility(false);
		}, 2500)
	}

	render() {
		return (
			<Animate default={{right: 0}} data={this.state.data} duration={500}>
				{data => (
					<div className="portal" style={{right: data.right, top: (this.getWindowTop() + 10) }}>
						<section className={this.props.message.indexOf('Removed') !== -1 ? 'remove' : ''}>
							<button onClick={() => { this.props.closePortal(); this.props.setModalVisibility(false); }}>X</button>
						</section>
						<section>
							<h1>{this.props.message}</h1>
						</section>
					</div>
				)}
			</Animate>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		message: state.cartMessage
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PseudoModal);