import * as React from 'react';
import { Route } from 'react-router-dom'

//STYLES
import '../scss/app.scss'


// COMPONENTS
import Header from './Header'
import CandyList from './CandyList'
import Cart from './Cart'
import Checkout from './Checkout'


export default function App  () {


	return (
	<>
		<Route path='/' component={Header}/>
		<Route exact path='/' component={CandyList} />
		<Route path='/cart' component={Cart} />
		<Route path='/checkout' component={Checkout} />
	</>
	);
};




