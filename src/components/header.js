import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lastScrollTop: 0,
			isSticky: false
		}

		this.handleOnChange = this.handleOnChange.bind(this);
		this.listenForScroll = this.listenForScroll.bind(this);
		this.shouldBeSticky = this.shouldBeSticky.bind(this);
		this.updateScrollTop = this.updateScrollTop.bind(this);
	}

	handleOnChange = (e) => {
		this.props.setCategoryFilter(e.target.value.toUpperCase())
	}

	listenForScroll = () => {
		window.addEventListener('scroll', () => {
			let sticky = false
			if (this.shouldBeSticky()) {
				sticky = true
			}

			this.setState({
				isSticky: sticky
			})
		})
	}

	updateScrollTop = (scrollTop) => {
		this.setState({
			lastScrollTop: scrollTop
		})
	}

	shouldBeSticky = () => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > 84) {
			this.updateScrollTop(scrollTop)
			return true
		} else {
			return false
		}
	}

	componentWillMount() {
		this.listenForScroll();
	}

	render() {
		return (
			<header>
				<nav className={this.state.isSticky ? 'sticky' : ''}>
					<h1><Link to="/">home</Link></h1>
					<form>
						<label>
							<select onChange={this.handleOnChange}>
								<option value="all">all</option>
								<option value="books">books</option>
								<option value="kitchen">kitchen</option>
								<option value="music">music</option>
								<option value="technology">technology</option>
							</select>
						</label>
					</form>
					<Link to="/cart"><h2><span>{this.props.shoppingCart.length}</span></h2></Link>
				</nav>
			</header>
		)
	}
}

export default Header;