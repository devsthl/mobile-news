import { View, Text, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ScreenHeader from '../../Components/ScreenHeader'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
import { Colors, Metrics } from '../../Themes'
import { dataFlatList } from '../../mocks/homeData'
import { useTranslation } from 'react-i18next'
import HeaderHome from './HeaderHome'
import NewColor from '../../Themes/NewColor'
import useThemeColors from '../../Hooks/useThemeColors'

interface PropsDashboard {
	navigation: any;
}
interface PropsNewsWidgit {
	navigation: any;
	data: any;
}
interface PropsListScreen {
	navigation: any,
	DataIcon: any,
}

const NewsWidgit = ({ navigation, data }: PropsNewsWidgit) => {
	const themes = useThemeColors().themes || 'default';

	return (
		<TouchableOpacity
			style={styles.wrapCarousel}
		// onPress={() =>
		// 	data.id != undefined && data.id != null
		// 		? navigation.navigate('DetailNewsScreen', { id: data.id })
		// 		: null
		// }
		>
			<Image
				source={data && { uri: data.backGroud }}
				style={styles.ImageNew}
				resizeMode={'stretch'}
			/>
			<Text allowFontScaling={false} style={[styles.TextTitle, { color: data ? data.color : NewColor[themes].text.header },]}>
				{data ? data.title : null}
			</Text>
		</TouchableOpacity>
	)
}

interface typeFlatList {
	id: number;
	name: string;
	image: any;
	count?: number;
}


const _onItemFlat = (id: number, navigation: any) => {
	switch (id) {
		case 1:
			navigation.navigate('ProFileStack');
			break;
		case 2:
			navigation.navigate('Register');
			break;
		case 3:
			navigation.navigate('Approve');
			break;
		case 4:
			navigation.navigate('TimeSheetsWebview');
			break;
		case 5:
			navigation.navigate('PayCheckStack');
			break;
		case 6:
			navigation.navigate('NewsStack');
			break;
		case 7:
			navigation.navigate('SurveyStack');
			break;
		case 8:
			navigation.navigate("ReportScreen");
			break;
		case 9:
			navigation.navigate('CreateVoteStack');
			break;
		case 10:
			navigation.navigate('GPS');
			break;
		case 11:
			navigation.navigate('MeetingScreen');
			break;
		case 12:
			navigation.navigate('ScanQR');
			break;
		case 13:
			navigation.navigate('ListofEmployees');
			break;
	}
};


interface typeFlatList {
	id: number;
	name: string;
	image: any;
}

const ListScreen = ({ navigation, DataIcon }: PropsListScreen) => {
	const themes = useThemeColors().themes || 'default';

	const _renderItem = ({ item }: { item: typeFlatList }) => {
		const widthIcon = (Metrics.screenWidth - 64) / 3
		const h = (Dimensions.get('window').height - 420) / 3
		const minH = 136
		const heightIcon = h > minH ? h : minH
		return (
			<View style={{
				flexDirection: 'row',
				backgroundColor: NewColor[themes].background.primary,
				width: widthIcon,
				height: heightIcon,
				margin: 8,
				padding: 8,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 10,
				borderWidth: 1,
				borderColor: NewColor[themes].border
			}}>
				<TouchableOpacity
					style={styles.warpItemFlat}
					onPress={() => _onItemFlat(item.id, navigation)}
				>
					<View style={styles.iconCircle}>
						{<item.image />}
						{item.count !== 0 && <View style={styles.badge}>
							<Text allowFontScaling={false} style={[styles.textBadge]}>{item.count}</Text>
						</View>
						}
					</View>
					<View style={styles.wrapTextFlat}>
						<Text allowFontScaling={false} style={[styles.textNameFlat,]}>{item.name}</Text>
					</View>
					<View style={styles.viewBadge}>
					</View>
				</TouchableOpacity >
			</View >
		);
	};

	return (
		<FlatList
			style={{ flex: 1 }}
			data={DataIcon}
			renderItem={_renderItem}
			keyExtractor={(item) => item.id.toString()}
			numColumns={3}
			showsVerticalScrollIndicator={false}
		/>
	)
}

function Dashboard({ navigation }: PropsDashboard) {
	const themes = useThemeColors().themes || 'default';

	const selector = useSelector((state: any) => state.auth)
	const { user } = selector
	const { t, i18n } = useTranslation();

	// const [DataIcon, setDataIcon]: any[] = useState(dataFlatList)
	const [data, setData] = useState({
		backGroud: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/290942541_395928692516693_5123194549793268467_n.png?_nc_cat=101&ccb=1-7&_nc_sid=dd9801&_nc_ohc=StmCu42kYZUAX_oGkZD&tn=NR0ofZe4cv8iwi9A&_nc_ht=scontent.fhan1-1.fna&edm=ADwHzz8EAAAA&oh=00_AT8Tg2cRkPaOT2Mpkc-0R402ijpnQEnVtuDAW1TbPNL3Vw&oe=635BF2F9',
		title: 'Xin chào ... Xin chào ... Xin chào ... Xin chào ...',
		color: NewColor[themes].border
	})

	return (
		<ScreenHeader
			hideHeader={true}
		>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<HeaderHome
					navigation={navigation}
					avatar={'https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/311667660_672522284227852_2079189164717525519_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=rqGgYK3VfVcAX-EF2_H&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_ONRI4X6i4f7OfrMOVk2Y6_TdGn7Ca-1urgQmxnzALyw&oe=6356B390'}
					fullName={'Testmobile'}
				/>
				<NewsWidgit
					navigation={navigation}
					data={data}
				/>
				<View style={[styles.wrapFlat]}>
					<ListScreen
						navigation={navigation}
						DataIcon={dataFlatList}
					/>
				</View>
			</View>
		</ScreenHeader>
	)
}

export default Dashboard;