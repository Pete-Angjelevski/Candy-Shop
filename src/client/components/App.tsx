import * as React from 'react';
import { Route } from 'react-router-dom'
import {StripeProvider, Elements} from 'react-stripe-elements'


//STYLES
import '../scss/app.scss'


// COMPONENTS
import Header from './Header'
import CandyList from './CandyList'
import Cart from './Cart'
import Checkout from './Checkout'

interface AppProps {

}


const App: React.FC<AppProps>  =  () => {


	return (
	<>
		<Route path='/' component={Header}/>
		<Route exact path='/' component={CandyList} />
		<Route path='/cart' component={Cart} />
		<Route path='/checkout' component={Checkout} />
	</>
	);
};


export default App

