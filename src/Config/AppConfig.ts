/** @format */

// Simple React Native specific changes

const GlobalConfig = {
	// font scaling override - RN default is on
	allowTextFontScaling: true,
	version: '1.1.0',
	devVersion: '1.0.0',
	mode: 'dev',
};

export function isDevMode() {
	if (GlobalConfig.mode === 'dev') {
		return true;
	}

	return false;
}

export default GlobalConfig;
