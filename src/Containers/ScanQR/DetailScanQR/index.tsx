import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styles from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import color from '../../../Themes/color';
import { MARGIN } from '../../../Utils/Transform';

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
interface Props {
    navigation?: any,
    _onRead: any,
}
const DetailScanQR = (props: Props) => {
    const { navigation, _onRead } = props;
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={styles.container}>
            <QRCodeScanner
                onRead={_onRead}
                reactivate={true}
                reactivateTimeout={2000}
                permissionDialogMessage={"Need Permission to Access Camera"}
                markerStyle={{ borderColor: NewColor[themes].background.primary, borderRadius: MARGIN }}
                showMarker={true}
            />
        </View>
    )
}

export default DetailScanQR;
