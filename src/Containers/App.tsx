import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../Components/AppText'
import { ButtonCancel, ButtonNormal, ButtonPrimary } from '../Components/Button'

const App = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppText>Note</AppText>
            <ButtonCancel
                title={'Cancel'}
                onPress={() => { console.log('cancel') }}
                marginTop={10}
            />
            <ButtonCancel
                title={'Cancel'}
                onPress={() => { console.log('cancel') }}
                isWrap
                isLoading
                marginTop={10}
            />
            <ButtonNormal
                title={'Normal'}
                onPress={() => console.log('Normal')}
                marginTop={10}
            />
            <ButtonNormal
                title={'Normal'}
                onPress={() => console.log('Normal')}
                isLoading
                isWrap
                marginTop={10}
            />
            <ButtonPrimary
                isWrap
                title={'PrimaryPrimaryPrimary'}
                onPress={() => console.log('PrimaryPrimaryPrimary')}
                marginTop={10}
            />
            <ButtonPrimary
                isLoading={true}
                isWrap
                title={'Primary'}
                onPress={() => console.log('PrimaryPrimaryPrimary')}
                marginTop={10}
            />
            <View style={{ flexDirection: 'row' }}>
                <ButtonPrimary
                    title={'Primary'}
                    onPress={() => console.log('PrimaryPrimaryPrimary')}
                    marginTop={10}
                />
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({})