import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import ReduxPersistConfig from '../../Config/ReduxPersist';
import configStore from './CreateStore';
import rootSaga from '../Saga';

const reducres = combineReducers({
	app: require('../Redux/AppRedux').reducer,
    auth: require('../Redux/AuthRedux').reducer,
});


export default () => {
	let finalReducres : any = reducres;

	if (ReduxPersistConfig.active) {
		const persistConfig = ReduxPersistConfig.storeConfig;
		finalReducres = persistReducer(persistConfig, reducres);
	}

	const { store } = configStore(finalReducres, rootSaga);

	return store;
};
