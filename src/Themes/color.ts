import { Appearance } from 'react-native';
const colorScheme = Appearance.getColorScheme();


const color = {
    primary: '#1D9BF0',
    primarysecondary: '#002336',
    secondary: '#4B4B4D',
    thirtdWhite: '#E0EEFF',
    greenPri: '#00CA95',
    redPri: '#F96472',
    white: '#FFFFFF',
    whitesecondary: '#F1F3F4',
    gray: '#A1A1A2',
    black: '#000',
    black2: '#000000',
    translucentGrey: '#5B727E',
    yellow: '#FEBF10',
    boder: '#D6D6D6',
    gray2: '#A1A1A2AA',
    white1: '#FFFFFF00',
    modal: '#D6D6D610',

    Registration: '#FFAD2D',
    approve: '#1D9BF0',
    paycheck: '#4ABBFE',
    News: '#D795FF',
    Attendance: '#F96472',
    survey: '#F6851F',
    Meeting: '#EB8B9A',
    jobboard: '#02C954',
    colorApprove: '#5CDEBF',
    colorPending: '#F8964A',

	tertiary: '#6D8A9C',
	accent: '#409AB2',

	error: '#FF3B30',
	warning: '#FFCC00',

    //color Histaff
	grey: {
		darkest: '#221F20',
		darker: '#434343',
		dark: '#777777',
		light: '#B0B0B0',
		lighter: '#ECECEC',
		lightest: '#F8F8F8',
	},

	transparent: 'rgba(0,0,0,0)',
	translucentWhite: 'rgba(230,230,230,0.5)',
	translucentBlack: 'rgba(0,0,0,0.05)',

	textTitle: '#B0B0B0',
	textBody: '#221F20',
	placeholder: '#DEDEDE',

	status: {
		rejected: '#DD5849',
		approved: '#33AF8A',
		pending: '#F58634',
		registered: '#234D69',
		created: '#234D69',
		Cancellation: '#ADFF2F',
	},

	record: {
		leave: '#DD5849',
		overtime: '#33AF8A',
		lateInEarlyOut: '#66C6DF',
		timesheetExplanation: '#F58634',
		approveTimeExplanation: '#F58634',
		registerLaunchSkip: '#DD5849',
		kvpParentalLeave: '#DD5849',
		checkIn: '#234D69',
	},
	input: '#F8F8F8', //remove
	backgroundScreen: '#F8F8F8',

	bussiness: {
		resolve: {
			text: '#33AF8A',
			background: '#B8EADB',
		},
		reject: {
			text: '#DF2C21',
			background: '#FFF0ED',
		},
	},

}

export default color;