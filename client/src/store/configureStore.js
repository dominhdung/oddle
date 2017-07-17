import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';
import reducer from '../reducers/reducers';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
  composeEnhancers = composeWithDevTools;
}

const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
