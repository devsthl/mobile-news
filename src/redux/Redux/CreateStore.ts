/** @format */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import ReduxPersistConfig from '../Config/ReduxPersist';
// import Rehydration from '../Services/Rehydration';

export default (rootReducer: any, rootSaga: any) => {
	/* ------------- Redux Configuration ------------- */
	const middlewares = [];
	const enhancers = [];

	/* ------------- Saga Middleware ------------- */
	const sagaMiddleware = createSagaMiddleware();

	middlewares.push(sagaMiddleware);

	/* ------------- Assemble Middleware ------------- */
	enhancers.push(applyMiddleware(...middlewares));
	const store = createStore(rootReducer, compose(...enhancers));

	// configure persistStore and check reducer version number
	//   if (ReduxPersist.active) {
	//     Rehydration.updateReducers(store);
	//   }

	const sagaManager = sagaMiddleware.run(rootSaga);

	return {
		store,
		sagaManager,
		sagaMiddleware,
	};
};
