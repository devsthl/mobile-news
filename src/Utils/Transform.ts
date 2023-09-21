/** @format */

import { Dimensions, Platform } from 'react-native'
import { isIPhoneX } from './device'

const iOSStatusBarHeight = isIPhoneX() === true ? 44 : 20
const statusBarHeight = Platform.OS === 'ios' ? iOSStatusBarHeight : 22
const navBarHeight =
    Platform.OS === 'ios' ? 44 + statusBarHeight : 35 + statusBarHeight
const windowSize = Dimensions.get('window')
// const ratioH = windowSize.height / 812;
const ratioW = windowSize.width / 375
const ratioH = windowSize.width / 375
const MARGIN = ratioH * 10
const MARGIN2 = ratioH * 20
export const Pixel = ratioH
export const Pixel2 = 2 * ratioH
export const Pixel4 = 4 * ratioH
export const Pixel6 = 6 * ratioH
export const Pixel8 = 8 * ratioH
export const Pixel10 = 10 * ratioH
export const Pixel12 = 12 * ratioH
export const Pixel14 = 14 * ratioH
export const Pixel16 = 16 * ratioH
export const Pixel18 = 18 * ratioH
export const Pixel20 = 20 * ratioH
export const Pixel22 = 22 * ratioH
export const Pixel24 = 24 * ratioH
export const Pixel26 = 26 * ratioH
export const Pixel28 = 28 * ratioH
export const Pixel30 = 30 * ratioH
export const Pixel32 = 32 * ratioH
export const Pixel34 = 34 * ratioH
export const Pixel35 = 35 * ratioH
export const Pixel36 = 36 * ratioH
export const Pixel40 = 40 * ratioH
export const Pixel48 = 48 * ratioH
export const Pixel50 = 50 * ratioH
export const Pixel60 = 60 * ratioH
export const Pixel65 = 65 * ratioH
export const Pixel70 = 70 * ratioH
export const Pixel80 = 80 * ratioH
export const Pixel90 = 90 * ratioH
export const Pixel96 = 96 * ratioH
export const Pixel100 = 100 * ratioH
export const Pixel125 = 125 * ratioH
export const Pixel150 = 150 * ratioH
export const Pixel170 = 170 * ratioH
export const Pixel180 = 180 * ratioH
export const Pixel185 = 185 * ratioH
export const Pixel210 = 210 * ratioH
export const Pixel250 = 250 * ratioH
export const Pixel300 = 300 * ratioH
export const Pixel330 = 330 * ratioH
export const Pixel350 = 350 * ratioH
export const Pixel400 = 400 * ratioH
export const Pixel430 = 430 * ratioH
export const Pixel450 = 450 * ratioH
export const Pixel470 = 470 * ratioH

export {
    statusBarHeight,
    navBarHeight,
    windowSize,
    ratioH,
    ratioW,
    MARGIN,
    MARGIN2,
}
