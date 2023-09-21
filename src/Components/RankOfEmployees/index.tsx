import { View, Text, TextStyle, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import AppText from '../AppText'
import { SvgStarDefault, } from '../../Assets/SVG'
import color from '../../Themes/color'
interface Props {
    style?: TextStyle,
    datastar: dataStar[]
}
export interface dataStar {
    id: number,
    rated: number
}
const RankOfEmployees = (props: Props) => {
    const { style, datastar } = props
    return (
        <View style={[styles.container, { ...style }]}>
            <View style={styles.top}>
                <AppText style={styles.textTop}>Bảng thứ hạng</AppText>
                <AppText style={styles.textTopBottom}>của nhân viên</AppText>
            </View>
            <View style={styles.bottom}>
                {datastar.map(item => {
                    return (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 10,
                            flexDirection: 'column',
                            // backgroundColor: 'red'
                        }}>
                            {item.rated === 1 &&
                                <View style={{ flexDirection: 'column', marginBottom: 3 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, opacity: 0.5, borderColor: color.gray2, marginVertical: 2, marginHorizontal: 2 }}></View>
                                </View>
                            }
                            {item.rated === 2 &&
                                <View style={{ flexDirection: 'column', marginBottom: 3 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, opacity: 0.5, borderColor: color.gray2, marginVertical: 2, marginHorizontal: 2 }}></View>
                                </View>
                            }
                            {item.rated === 3 &&
                                <View style={{ flexDirection: 'column', marginBottom: 3 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, opacity: 0.5, borderColor: color.gray2, marginVertical: 2, marginHorizontal: 2 }}></View>
                                </View>
                            }
                            {item.rated === 4 &&
                                <View style={{ flexDirection: 'column', marginBottom: 3 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.gray2} /></View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, opacity: 0.5, borderColor: color.gray2, marginVertical: 2, marginHorizontal: 2 }}></View>
                                </View>
                            }
                            {item.rated === 5 &&
                                <View style={{ flexDirection: 'column', marginBottom: 3 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                        <View style={{ marginHorizontal: 2 }}><SvgStarDefault color={color.yellow} /></View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, opacity: 0.5, borderColor: color.gray2, marginVertical: 2, marginHorizontal: 2 }}></View>
                                </View>
                            }
                        </View>
                    )
                })}
                {/* <FlatList
                    data={datastar}
                    renderItem={_renderItem}
                /> */}
            </View>
        </View>
    )
}

export default RankOfEmployees