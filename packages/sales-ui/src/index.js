import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { addInventory, fetchInventory } from './actions/inventory';
import {inventoryDataService} from './reducers/inventory';

const store = createStore(reducers, {}, applyMiddleware(inventoryDataService));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addInventory('Juul Starter Kit', 34.99));
store.dispatch(fetchInventory());