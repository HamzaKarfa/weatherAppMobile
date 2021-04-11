import { createStore,applyMiddleware  } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk'


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
/*
// configureStore.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
*/