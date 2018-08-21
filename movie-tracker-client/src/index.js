
import './index.css';
import {ConnectedApp} from './App';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
// provider is passing in the redux store once for the the whole app
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';



// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
const store = configureStore();

render(
	//we pass the newly created store as a prop to the app component, each time the store changes the app is re-rendered
  <Provider store={store} >
    <ConnectedApp />
  </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
