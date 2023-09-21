import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
interface Props {
    data: [
        // {
        //     key: number,
        //     text: String
        // }
    ],
}
const RadioButton = (props: Props) => {
    const { data } = props
    const [value, setValue] = useState();
    return (
        <View>
            {data.map(res => {
                return (
                    <View key={res.key} style={styles.container}>
                        <Text style={styles.radioText}>{res.text}</Text>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res.key);
                            }}>
                            {value === res.key && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                    </View>
                )
            })}
            <Text>RadioButton</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
export default RadioButton