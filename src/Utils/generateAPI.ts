/** @format */

import API from '../Services/Api';
import APIConfig from '../Services/ApiConfig';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

// async function test(){
//     return 'http://192.168.60.64:6426/API/Mobile/';
// }

// const api = DebugConfig.useFixtures ? FixtureAPI : test().then(res => {
//     console.log('response uri', res);
//     API.create(res);
// })

export const apiConfig = DebugConfig.useFixtures
	? FixtureAPI
	: APIConfig.create();

// const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
const api = API.create();

export default api;
