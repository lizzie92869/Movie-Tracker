
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


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

render(
  <Provider store={store} >
    <ConnectedApp />
  </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
