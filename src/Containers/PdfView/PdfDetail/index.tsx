import { View, Text, Dimensions, Linking } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'
import Header from '../../../Components/Header'
import { SVGBack } from '../../../Assets/SVG'
import styles from './style'
import NewColor from '../../../Themes/NewColor'
import useThemeColors from '../../../Hooks/useThemeColors'
interface Props {
    navigation: any
}
const PdfDetail = (props: Props) => {
    const { navigation } = props
    const item = navigation.state.params.item
    console.log("item,", item);

    const pdf = { uri: item.uri, cache: true }
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title={item.des}
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()} />
            <Pdf
                trustAllCerts={false}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
                source={pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    Linking.openURL(uri)
                    console.log(`Link pressed: ${uri}`);
                }}
            />
        </View>
    )
}

export default PdfDetail