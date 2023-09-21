import { StyleSheet } from 'react-native';
import { Pixel16, Pixel30 } from '../../../Utils/Transform';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  scrollView: {
    borderTopLeftRadius: Pixel30,
    borderTopRightRadius: Pixel30,
    flex: 1,
    height: '100%'
  },

  body: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: Pixel16,
    paddingHorizontal: Pixel16,

  },

  viewTitleInput: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

});
