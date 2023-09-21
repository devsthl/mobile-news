import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { fontSize, } from '../../Themes';
import AppText from '../AppText';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';
import { Pixel10, Pixel20, Pixel6 } from '../../Utils/Transform';

interface Props {
  onPress: () => void,
  title: string,
  isWrap?: boolean,
  isLoading?: boolean,
  marginTop?: number,
}

const ButtonPrimary = (props: Props) => {
  const { onPress, title, isWrap, isLoading, marginTop } = props;

  const press = () => {
    !isLoading && onPress()
  }
  const themes = useThemeColors().themes || 'default';

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={[styles.full, { marginTop: marginTop }]}>
        {isWrap && <View style={{ flex: 1 }} />}
        <TouchableOpacity
          onPress={press}
          style={[styles.container, { backgroundColor: NewColor[themes].primary }, !isWrap && { flex: 1 }, isLoading && { backgroundColor: NewColor[themes].button.loading }]}
        >
          <View style={styles.activityIndicator}>
            {isLoading && <ActivityIndicator size={'small'} color={NewColor[themes].Indicator} />}
          </View>
          <AppText style={[styles.text, { color: NewColor[themes].text.buttonPrimary }]}>{title}</AppText>
          <View style={styles.activityIndicator} />
        </TouchableOpacity>
        {isWrap && <View style={{ flex: 1 }} />}
      </View>
    </View>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Pixel10,
    borderRadius: Pixel6,
    flexDirection: 'row',
    marginHorizontal: Pixel20,
  },
  text: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  full: {
    flexDirection: 'row',
    width: '100%',
  },
  activityIndicator: {
    width: Pixel20,
    height: Pixel20,
    marginHorizontal: Pixel10,
  }
})