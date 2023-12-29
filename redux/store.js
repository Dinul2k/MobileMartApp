// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // You might need to install this: npm install redux-thunk
import rootReducer from './reducers'; // Create this file later

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
