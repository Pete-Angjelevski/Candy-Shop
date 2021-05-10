import * as React from 'react';

//  DATA
import candyData from '../../data/candy'

// COMPONENTS
import Header from './Header'
import CandyList from './CandyList'


export default function App  () {


	return (
	<>
		<Header />
		<CandyList candy={candyData} />
		
	</>
	);
};




