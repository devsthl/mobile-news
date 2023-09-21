export const getFeatureViewAnimation = (animatedValue: any, outputX: number) => {
    const TRASLATE_X_INPUT_RANGE = [0, 80];
    const translateY = {
        translateY: animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        }),
    };
    return {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: TRASLATE_X_INPUT_RANGE,
                    outputRange: [0, outputX],
                    extrapolate: 'clamp'
                }),
            },
            translateY
        ]
    }
}