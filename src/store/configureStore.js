import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import reducer from '../reducers/reducers';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];
let composeEnhancers = compose;

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
