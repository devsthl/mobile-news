/** @format */

import moment from 'moment';
import typeRegisterLeave from './typeRegisterLeave';

export default {
	register: {
		// fromDay: moment().startOf('year').format('YYYY-MM-DD'),
		// toDay: moment().add(3, 'months').format('YYYY-MM-DD'),
		fromDay: moment().subtract(2, 'M').format('YYYY-MM-DD'),
		toDay: moment().add(2, 'M').format('YYYY-MM-DD'),
		status: [
			typeRegisterLeave.register.value,
			typeRegisterLeave.pending.value,
			typeRegisterLeave.approve.value,
			typeRegisterLeave.cancel.value,
		],
	},
	approve: {
		// fromDate: moment()
		// 	.subtract(1, 'months')
		// 	.startOf('month')
		// 	.format('YYYY-MM-DD'),
		// toDate: moment().endOf('month').format('YYYY-MM-DD'),
		fromDate: moment().subtract(2, 'M').format('YYYY-MM-DD'),
		toDate: moment().add(2, 'M').format('YYYY-MM-DD'),
		keyword: '',
		type: -1,
	},
	registerLunchSkip: {
		fromDate: moment().startOf('month').format('YYYY-MM-DD'),
		toDate: moment().endOf('month').format('YYYY-MM-DD'),
	},
};
