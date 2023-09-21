import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react';
import { fontSize, Metrics } from '../../Themes';
import AppText from '../AppText';
import { MARGIN } from '../../Utils/Transform';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor'
interface Props {
  onPress: () => void,
  title: string,
  isWrap?: boolean,
  isLoading?: boolean,
  marginTop?: number,
  style?: any
}

const ButtonNormal = (props: Props) => {
  const { onPress, title, isWrap, isLoading, marginTop, style } = props;
  const themes = useThemeColors().themes || 'default';
  const press = () => {
    !isLoading && onPress()
  }
  return (
    <View
      style={[{
        flexDirection: 'row',
      }, style]}>
      <View style={[styles.full, { marginTop: marginTop }]}>
        {isWrap && <View style={{ flex: 1 }} />}
        <TouchableOpacity
          onPress={press}
          style={[styles.container,
          !isWrap && { flex: 1 },
          {
            borderColor: NewColor[themes].border,
            backgroundColor: NewColor[themes].button.normal,
          },
          isLoading && { backgroundColor: NewColor[themes].button.loading },
            style]}
        >
          <View style={styles.activityIndicator}>
            {isLoading && <ActivityIndicator size={'small'} color={NewColor[themes].Indicator} />}
          </View>
          <AppText style={[styles.text, { color: NewColor[themes].text.buttonNormal }]}>{title}</AppText>
          <View style={styles.activityIndicator} />
        </TouchableOpacity>
        {isWrap && <View style={{ flex: 1 }} />}
      </View>
    </View >
  )
}

export default ButtonNormal

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: MARGIN,
    borderRadius: MARGIN,
    flexDirection: 'row',
    // marginHorizontal: 20,

    borderWidth: 0.5,
  },
  text: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  full: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: Metrics.screenHeight * 0.06,

  },
  activityIndicator: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  }
})