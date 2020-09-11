import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';

import allReducers from './reducers/allReducers';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// export const persistor = persistStore(store);
// export default { store, persistor };
