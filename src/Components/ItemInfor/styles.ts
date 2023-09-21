import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, fontSize } from '../../Themes';
import { Pixel10, Pixel2, Pixel20, Pixel30, Pixel50, Pixel6 } from '../../Utils/Transform';

const styles = StyleSheet.create({
  container: {
    height: Pixel50,
    backgroundColor: 'white',
    padding: Pixel6,
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: Pixel2,
  },
  imageBox: {
    marginRight: Pixel10,
  },
  image: {
    height: Pixel20,
    width: Pixel20,
  },
  label: {
    fontSize: fontSize.small,
  },
  rowContent: {
  },
  content: {
    marginTop: Pixel10,
    fontSize: fontSize.medium,
    marginLeft: Pixel30,
  },
});

export default styles;
