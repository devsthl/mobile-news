/** @format */
import navigationConfig from './navigationConfig';
import { stackNavigation } from './nameNavigation';

import Dashboard from '../Containers/Dashboard';
// import RegisterLeave from 'Containers/RegisterLeave';
// import RegisterOt from 'Containers/RegisterOT';
// import RegisterLateInEarlyOut from 'Containers/RegisterLateInEarlyOut';
// import ApproveLateInEarlyOut from 'Containers/ApproveLateInEarlyOut';
// import ApproveLeave from 'Containers/ApproveLeave';
// import ApproveOT from 'Containers/ApproveOT';
// import SalaryWebview from 'Containers/SalaryWebview';
// import AddRegisterLeave from 'Containers/AddRegisterLeave';
// import AddRegisterOT from 'Containers/AddRegisterOT';
// import AddRegisterLateInEarlyOut from 'Containers/AddRegisterLateInEarlyOut';
// import RecordHrDetail from 'Containers/RecordHrDetail';
// import TimeSheetsWebview from 'Containers/TimeSheetsWebview';
// import BenefitWebview from 'Containers/BenefitWebview';
// import GPSTimeClock from 'Containers/GPSTimeClock';
// import GPSWFHTimeClock from 'Containers/GPSWFHTimeClock';
// import GPSWFHRegister from 'Containers/GPSWFHRegister'
// import WifiTimeClock from 'Containers/WifiTimeClock';
// import QRRecordHr from 'Containers/QRRecordHr';
// import QRRecordHrScan from 'Containers/QRRecordHrScan';
// import Report from 'Containers/Report';

import Phonebook from '../Containers/Phonebook';
// import PhonebookDetail from 'Containers/PhonebookDetail';
// import OrgList from 'Containers/OrgList';
// import PhonebookSearch from 'Containers/PhonebookSearch';

import Notification from '../Containers/Notification';
// import NotificationDetail from 'Containers/NotificationDetail';

import CompensationsAndBenefits from '../Containers/CompensationsAndBenefits';
// import Benefits from 'Containers/Benefits';
// import Insurance from 'Containers/Insurance';
// import InsuranceHealth from 'Containers/InsuranceHealth';
// import InsuranceHealthFamily from 'Containers/InsuranceHealthFamily';
// import InsuranceHealthPrivileges from 'Containers/InsuranceHealthPrivileges';
// import InsuranceHealthCompanyStatistics from 'Containers/InsuranceHealthCompanyStatistics';

import RecordHr from '../Containers/RecordHr';
import RecordHrDetail from '../Containers/RecordHrDetail';
import Record from '../Containers/Record';
import Process from '../Containers/Process'
import Approve from '../Containers/Approve';
import ApproveOT from '../Containers/Approve/ApproveOT';
import ApproveOTList from '../Containers/Approve/ApproveOT/ApproveOTList';
import ApproveExplanation from '../Containers/Approve/ApproveExplanation';
import ApproveExplanationList from '../Containers/Approve/ApproveExplanation/ApproveExplanationList';
import ApproveHistory from '../Containers/Approve/ApproveHistory';
import ApproveHistoryList from '../Containers/Approve/ApproveHistory/ApproveHistoryList';
import ApproveLateInEarlyOut from '../Containers/Approve/ApproveLateInEarlyOut';
import ApproveLateInEarlyOutList from '../Containers/Approve/ApproveLateInEarlyOut/ApproveLateInEarlyOutList';
import ApproveList from '../Containers/Approve/ApproveList';
// import WorkingBefore from 'Containers/WorkingBefore';
// import WorkingNow from 'Containers/WorkingNow';
// import Contract from 'Containers/Contract';
// import TrainOut from 'Containers/TrainOut';
// import PersonalRelations from 'Containers/PersonalRelations';
import Settings from '../Containers/Setting';
// //WorkingSalary
// import WorkingSalary from 'Containers/WorkingSalary';
// import ChangePassword from 'Containers/ChangePassword';
import WifiCheckIn from '../Containers/WifiCheckIn';
import NotFound from '../Containers/NotFound';
import Regulation from '../Containers/Regulation';
// import InOutMng from 'Containers/InOutMng';
import RegisterScreen from '../Containers/Register';
import RegisterOff from '../Containers/Register/RegisterOff';
import RegisterLateInEarlyOut from '../Containers/Register/RegisterLateInEarlyOut';
import RegisterOT from '../Containers/Register/RegisterOT';
import GPS from '../Containers/GPS';
import ListofEmployees from '../Containers/ListofEmployees';
import ScanQR from '../Containers/ScanQR';
import GPSCheckIn from '../Containers/InOut/GPSCheckIn';
import EmployeesDetail from '../Containers/EmployeesDetail';
import HeaderAnimation from '../Containers/HeaderAnimation';
import Rated from '../Containers/Rated';
import Survay from '../Containers/Survey';
import PhonebookDetail from '../Containers/PhoneBookDetail';
import PdfView from '../Containers/PdfView';
import PdfDetail from '../Containers/PdfView/PdfDetail';
import Family from '../Containers/Process/Family';
const routes: any = {
	CORE: {
		Dashboard: DashboardNew,
		Notification: Notification,
		Phonebook: Phonebook,
		CompensationsAndBenefits: CompensationsAndBenefits,
		Record: Record,
		RecordHr: RecordHr,
		RecordHrDetail: RecordHrDetail,
		Settings: Settings,
		Register: RegisterScreen,
		RegisterOff: RegisterOff,
		RegisterLateInEarlyOut: RegisterLateInEarlyOut,
		RegisterOT: RegisterOT,
		// GPS: GPSCheckIn,
		GPSCheckIn: GPS,
		Approve: Approve,
		ApproveExplanation: ApproveExplanation,
		ApproveExplanationList: ApproveExplanationList,
		ApproveLateInEarlyOut: ApproveLateInEarlyOut,
		ApproveLateInEarlyOutList: ApproveLateInEarlyOutList,
		ApproveHistory: ApproveHistory,
		ApproveHistoryList: ApproveHistoryList,
		ApproveOT: ApproveOT,
		ApproveOTList: ApproveOTList,
		ApproveList: ApproveList,
		ListofEmployees: ListofEmployees,
		ScanQR: ScanQR,
		RegisterOut: RegisterOut,
		TimeSheetsWebview: TimeSheets,
		EmployeesDetail: EmployeesDetail,
		HeaderAnimation: HeaderAnimation,
		Rated: Rated,
		EditHomeScreen: EditDashBoard,
		Survey: Survey,
		WifiCheckIn: ScanQR,
		PhonebookDetail: PhonebookDetail,
		PdfView: PdfView,
		PdfDetail: PdfDetail,
		//test interceptor
		// EmployeeInfo: EmployeeInfo
	},
	BVG: {
		Dashboard: Dashboard,
		Notification: Notification,
		Phonebook: Phonebook,
		CompensationsAndBenefits: CompensationsAndBenefits,
		Record: Record,
		RecordHr: RecordHr,
		RecordHrDetail: RecordHrDetail,
		Settings: Process,
		Rewards: Regulation,
	},
};

function mapRouter(containerName: any, companyCode: any) {
	try {
		const isCore = ['TVCOM', 'TVCDEMO', 'CORE'].includes(companyCode);
		if (!companyCode || isCore) {
			const coreContainer: any = routes.CORE[containerName];

			return coreContainer || NotFound;
		}

		const companyGroup: any = routes[companyCode];

		if (!companyGroup) {
			return NotFound;
		}

		const container = companyGroup[containerName];

		if (!container) {
			return NotFound;
		}

		return container;
	} catch (error) {
		console.log('mapRouter', error);
		return NotFound;
	}
}

// ================== LOGIN ======================
import Login from '../Containers/Login';
import AuthLoading from '../Containers/AuthLoading';
import RegisterOut from '../Containers/RegisterOut';
import TimeSheets from '../Containers/SalaryAndTimeSheets/TimeSheets/Index';
import DashboardNew from '../Containers/DashboardNew';
import EditDashBoard from '../Containers/DashboardNew/EditDashBoard';
import Survey from '../Containers/Survey';
// import OrgListReport from 'Containers/OrgListReport';

const routerStackLogin: any = {
	CORE: {
		Login: Login,
		AuthLoading: AuthLoading,
		// EmployeesDetail: EmployeesDetail,

	},
};

function mapRouterStackLogin(containerName: any, companyCode: any) {
	try {
		const isCore = ['TVCOM', 'TVCDEMO', 'CORE'].includes(companyCode);
		if (!companyCode || isCore) {
			const coreContainer: any = routerStackLogin.CORE[containerName];

			return coreContainer || NotFound;
		}

		const companyGroup: any = routerStackLogin[companyCode];

		if (!companyGroup) {
			return NotFound;
		}

		const container = companyGroup[containerName];

		if (!container) {
			return NotFound;
		}

		return container;
	} catch (error) {
		console.log('mapRouter', error);
		return NotFound;
	}
}

function mapDefaultTab(tabName: any) {
	switch (tabName) {
		case navigationConfig.tabBarName.HOME:
			return stackNavigation.DASHBOARD;
		case navigationConfig.tabBarName.PHONEBOOK:
			return stackNavigation.PHONEBOOK;
		case navigationConfig.tabBarName.COMPENSATIONS_AND_BENEFITS:
			return stackNavigation.COMPENSATIONS_AND_BENEFITS;
		case navigationConfig.tabBarName.NOTIFICATION:
			return stackNavigation.NOTIFICATION;
		case navigationConfig.tabBarName.RECORD:
			return stackNavigation.RECORDHR;
	}

	return stackNavigation.NOT_FOUND;
}

export { mapRouter, mapRouterStackLogin, mapDefaultTab };
