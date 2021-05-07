import * as React from 'react';
import { useState, useEffect } from 'react';
import * as request from 'superagent'


interface AppProps {}


const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		return request.get('/api/hello')
		.then(res => {
			setGreeting(res.body)
			return null
		})
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello {greeting}!</h1>
		</main>
	);
};




export default App;
