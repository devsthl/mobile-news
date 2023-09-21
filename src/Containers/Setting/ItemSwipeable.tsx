import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React, { useRef } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import color from "../../Themes/color";
import Animated from "react-native-reanimated";
import { Pixel10, Pixel20, Pixel40 } from "../../Utils/Transform";
import NewColor from "../../Themes/NewColor";
import useThemeColors from "../../Hooks/useThemeColors";

const styles = StyleSheet.create({
    actionText: {
        fontWeight: '600',
        paddingHorizontal: Pixel20
    }
})

interface PropsSwipeableDelete {
    title: string;
    deleteItem: any;
}

export default function ItemSwipeable(props: PropsSwipeableDelete) {
    const { title, deleteItem } = props
    const swipeableRef = useRef<Swipeable>(null);
    const themes = useThemeColors().themes || 'default';

    const renderLeftActions = () => {

        return (
            <TouchableHighlight
                onPress={() => {
                    deleteItem()
                    swipeableRef?.current?.close();
                }}
                style={{ backgroundColor: NewColor[themes].primary, justifyContent: 'center', alignItems: 'center', }}>
                <Animated.Text style={[styles.actionText, { color: NewColor[themes].text.buttonPrimary }]}>Xóa</Animated.Text>
            </TouchableHighlight>
        )
    }
    return (
        <View style={{ marginTop: Pixel10 }}>
            <Swipeable
                ref={swipeableRef}
                renderRightActions={renderLeftActions}
            >
                <View style={{ height: Pixel40, justifyContent: "center", alignItems: 'center', backgroundColor: NewColor[themes].text.warning, }}>
                    <Text>{title}</Text>
                </View>
            </Swipeable>
        </View>
    );
}
