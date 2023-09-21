import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoading from '../Containers/AuthLoading'
import Login from '../Containers/Login'

const LoginStack = createStackNavigator({
    AuthLoading: {
        screen: AuthLoading,
    },
    Login: {
        screen: Login,
    }
});
