import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
// createStore allows us to (1) connect our store to the rootReducer -- which wraps our other reducers. (2) Utilize the Thunk middlewear which allows us to construct our action creators in a specific way.
