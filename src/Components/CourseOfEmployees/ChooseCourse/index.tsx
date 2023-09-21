import { View, Text, TouchableOpacity } from 'react-native'
import AppText from '../../AppText'
import React from 'react'
import { MARGIN, MARGIN2 } from '../../../Utils/Transform'
import { fontSize } from '../../../Themes'
import NewColor from '../../../Themes/NewColor'
import useThemeColors from '../../../Hooks/useThemeColors'

interface Props {
    title: String
}
const ChooseCourse = (props: Props) => {
    const { title } = props
    const themes = useThemeColors().themes || 'default'
    return (
        <View>
            {title?.map((item: any, index: number) => {
                return (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            width: 140,
                            height: 4 * MARGIN * 0.6,
                            flexDirection: 'row',
                            marginHorizontal: 15
                        }}
                    // onPress={() => handleChange(itemS, item.keyID, item.multiCheck, index)}
                    >
                        <View style={{
                            width: MARGIN2 * 0.7,
                            height: MARGIN2 * 0.7,
                            borderRadius: MARGIN2 * 0.7,
                            borderWidth: 1,
                            borderColor: NewColor[themes].radio.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 12
                        }}>
                            <View style={
                                // item?.keyID?.findIndex((i: number) => i == itemS.id) < 0 ?
                                //     {}
                                //     :
                                {
                                    width: MARGIN * 0.7,
                                    height: MARGIN * 0.7,
                                    borderRadius: MARGIN * 0.7,
                                    backgroundColor: NewColor[themes].radio.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </View>

                        <AppText style={{
                            fontSize: fontSize.small * 0.8,
                            marginLeft: 5
                        }}>
                            {item.des}
                        </AppText>




                    </TouchableOpacity>
                )
            })}

        </View>
    )
}

export default ChooseCourse