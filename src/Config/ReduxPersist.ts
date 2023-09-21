/** @format */

import AsyncStorage from '@react-native-community/async-storage';
import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
	active: true,
	reducerVersion: '1.0',
	storeConfig: {
		key: 'primary',
		storage: AsyncStorage,
		blacklist: ['search', 'nav'],
		whitelist: ['auth'],
		transforms: [immutablePersistenceTransform],
	},
};

export default REDUX_PERSIST;
