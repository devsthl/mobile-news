import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import ContextApp from './ContextApp';
import { Provider } from 'react-redux';
import { AsyncStorageNavigationConfig } from './Utils/AsyncStorageHelper';
import CompanyCode from './Containers/CompanyCode';
import renderRootNavigation from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { persistor, store } from './redux/Store/configureStore';
import data from './Navigation/fakeData'
import CheckCompanyCode from './Containers/CheckCompanyCode';
import createStore from './redux/Redux';
import AsyncStorage from '@react-native-community/async-storage';
import LogRocket from '@logrocket/react-native';
import { ModalPortal } from 'react-native-modals';
import NavigationService from './NavigationService';


const store = createStore();

const InitApp = ({ navigation }: any) => {
    const [config, setConfig] = useState(null);
    // const [config, setConfig] = useState({
    // });
    const { configNavigation } = useContext(ContextApp);
    useEffect(() => {
        const getNavigationConfig = async () => {
            try {
                const config = await AsyncStorageNavigationConfig.get();
                console.log('cf...', config);
                // const config1 = await AsyncStorage.getItem('APP_NAVIGATION');

                // console.log("async:", config1);

                setConfig(config);
            } catch (error) {
                console.log('getCompanyCode', error);
                return '';
            }
        };

        getNavigationConfig();
    }, [configNavigation]);

    const handleGetCompanyCode = async (companyCode: any) => {
        setNavigationConfig();
    };

    const setNavigationConfig = async () => {
        try {
            const config = await AsyncStorageNavigationConfig.get();
            setConfig(config);
        } catch (error) {
            console.log('getCompanyCode', error);
            return '';
        }
    };

    if (config === null || !Object.keys(config).keys
        //  === 0
    ) {
        return <CheckCompanyCode
            // navigation={navigation}
            onGetCompanyCode={handleGetCompanyCode}
        />;
    }

    const RootNavigation = renderRootNavigation(config);
    // const RootNavigation = renderRootNavigation(data)

    return (
        <>
            <SafeAreaProvider>
                <RootNavigation
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </SafeAreaProvider>
            {/* <NotificationBanner /> */}
        </>
    );
}


function App() {
    const [configNavigation, setConfigNavigation] = useState(ContextApp);

    useEffect(() => {
        // SplashScreen.hide();
        LogRocket.init('s4pv1f/histaffpro')
        LogRocket.identify('Dangth', {
            name: 'Dangth',
            email: 'dangth@histaff.vn',

            // Add your own custom user variables here, ie:
            subscriptionType: 'pro'
        });
    }, []);

    return (
        <Provider store={store}>
            <ContextApp.Provider
                value={{ configNavigation, setConfigNavigation }}
            >
                <InitApp configNavigation={configNavigation} />
                <ModalPortal />

            </ContextApp.Provider>
        </Provider>
    );
}

export default App;
