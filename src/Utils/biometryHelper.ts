/** @format */

import TouchID from 'react-native-touch-id';

const BiometryHelper = {
	isSupported: async () => {
		try {
			const optionalConfigObject = {
				unifiedErrors: false, // use unified error messages (default false)
				passcodeFallback: false, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
			};

			const biometryType = TouchID.isSupported(optionalConfigObject);
			return biometryType;
		} catch (error) {
			console.log('ERRORGGGG', error);
			return false;
		}
	},
};

export const ConfigBiometry = {
	enableFaceID: false,
};

export default BiometryHelper;
