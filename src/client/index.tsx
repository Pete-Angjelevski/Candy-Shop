import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './scss/app';
import { Provider } from 'react-redux' 
import { store } from './store'
import { HashRouter as Router } from 'react-router-dom'

render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
 document.getElementById("root"));