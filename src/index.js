
import './index.css';
import {ConnectedApp} from './App';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import NavBar from './components/NavBar';


const initialState = {
  moviesFiltered: ["movie 1", "movie 2"],
  moviesWatched: ["happy feet", "harry potter"],
  moviesToWatch: ["smurfs", "simpsons"]
};

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store} >
    <ConnectedApp />
  </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
