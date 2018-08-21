import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';



export default function configureStore() {
  return createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //applyMiddleware(called redux thunk) for asynchronous request 
    applyMiddleware(thunk)
  );
}


// createStore allows us to:


// (1) connect our store to the rootReducer -- which wraps our other reducers.
// we need to pass it the reducers because here is the redux function createStore: 

// function createStore(reducer) {
// let state;
 
// function dispatch(action) {
// state = reducer(state, action);
// render();
// }
 
// function getState() {
// return state;
// }
 
// return {
// dispatch,
// getState
// };
// };

// (2) Utilize the Thunk middlewear which allows us to construct our action creators in a specific way.
