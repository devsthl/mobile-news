/** @format */

interface Stack {
	mode: string,
	headerMode: string
}

interface TabBarName {
	HOME: string,
	PHONEBOOK: string,
	COMPENSATIONS_AND_BENEFITS: string,
	NOTIFICATION: string,
	RECORD: string
}

interface Props {
	stack: Stack,
	tabBarName: TabBarName
}

const navigationConfig: Props = {
	stack: {
		mode: 'card',
		headerMode: 'none',
	},
	tabBarName: {
		HOME: 'Home',
		PHONEBOOK: 'Phonebook',
		COMPENSATIONS_AND_BENEFITS: 'CompensationsAndBenefits',
		NOTIFICATION: 'Notification',
		RECORD: 'Record',
	},
};

export default navigationConfig;
