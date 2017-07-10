import React from 'react';
import { render } from 'react-dom';

//components
import App from './components/app';

//react router deps
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

//css
import './index.css';
import './slick.css';
import './slick-theme.css';

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

render(router, document.getElementById('root'));