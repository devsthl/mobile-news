import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, processColor } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from '../../Components/ScreenHeader'
import { useSelector } from 'react-redux'
import styles from './styles'
import { Colors, Metrics, fontSize } from '../../Themes'
import { dataFlatList } from '../../mocks/homeData'
import { useTranslation } from 'react-i18next'
import NewHeader from './NewHeader'
import { bdWidgit2 } from '../../Assets/Images'
import MenuHeader, { IconHeader } from './MenuHeader'
import ItemInfo from './ItemInfo'
import { SvgQrCheckIn, SVGWFH, SvgAll, SvgEarly, SvgGPS, SvgJoboard, SvgLate, SvgReward, SvgPaycheck, SvgTimeLate, SvgLeaveEarly, SvgPartTime } from '../../Assets/SVG'
import color from '../../Themes/color'
import NewColor from '../../Themes/NewColor'
import SvgWithId from './EditDashBoard/SvgWithId'
import { NavigationEvents } from 'react-navigation';
import {
	AsyncStorageMenuDashboard
} from '../../Utils/AsyncStorageHelper';
import Donut, { PropsData } from '../../Components/Donut'
import GroupBarHome from './GroupBarHome'
import PieChartView from './PieChart'
import useThemeColors from '../../Hooks/useThemeColors'
import ItemView from '../../Components/ItemView'
import { MARGIN2, Pixel10, Pixel125, Pixel16, Pixel170, Pixel2, Pixel210, Pixel250 } from '../../Utils/Transform'
import ItemEarlyLater from '../../Components/ItemEarlyLater'
import ProcessChartIndex from '../../Components/ProcessChartIndex'
import CourseOfEmployees from '../../Components/CourseOfEmployees'
import BarChartScreen from '../../Components/BarChartScreen'
import RankOfEmployees from '../../Components/RankOfEmployees'
import { dataStar } from '../../Components/RankOfEmployees'
import { dateToUnix } from 'react-native-paper-dates/lib/typescript/Date/dateUtils'
const VIEW_LIST1 = Pixel170 / 2

interface PropsDashboard {
	navigation: any;
}
interface PropsNewsWidgit {
	navigation: any;
	data: any;
}
export interface PropsListScreen {
	navigation: any,
	DataIcon: any,
}


const VIEW_ICON = 65 * Metrics.ratioH
const MARGIN = 10 * Metrics.ratioH
const MARGIN_ICON = 8 * Metrics.ratioH
const SIZE_ICON = 35 * Metrics.ratioH

const NewsWidgit = ({ navigation, data }: PropsNewsWidgit) => {
	return (
		<TouchableOpacity
			style={styles.wrapCarousel}>
			<Image
				source={bdWidgit2}
				style={styles.ImageNew}
				resizeMode={'stretch'} />
			<Text allowFontScaling={false} style={[styles.TextTitle, { color: data ? data.color : Colors.black },]}>
				{/* {data ? data.title : null} */}
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


export const _onItemFlat = (id: number, navigation: any) => {
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
			navigation.navigate('Survey');
			break;
		case 8:
			navigation.navigate("ReportScreen");
			break;
		case 9:
			navigation.navigate('CreateVoteStack');
			break;
		case 10:
			navigation.navigate('GPSCheckIn');
			break;
		case 11:
			navigation.navigate('MeetingScreen');
			break;
		case 12:
			navigation.navigate('RegisterOut');
			break;
		case 13:
			navigation.navigate('ListofEmployees');
			break;
		case 14:
			navigation.navigate('WifiCheckIn');
			break;
		case 15:
			navigation.navigate('PdfView');
			break;
		case 99:
			navigation.navigate('EditHomeScreen');
			break;
	}
};


interface typeFlatList {
	id: number;
	name: string;
	image: any;
}

const ListScreen = ({ navigation, DataIcon }: PropsListScreen) => {

	const _renderItem = ({ item }: { item: typeFlatList }) => {
		return (
			<View style={{
				flexDirection: 'row',
				backgroundColor: Colors.white,
				width: VIEW_ICON,
				height: VIEW_ICON,
				margin: MARGIN_ICON,
				padding: MARGIN_ICON,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: MARGIN,

			}}>
				<IconHeader
					linkSvg={<SvgWithId id={item.id} />}
					label={item.name}
					onPress={() => _onItemFlat(item.id, navigation)}
				/>
			</View>
		);
	};

	return (
		<FlatList
			style={{ flex: 1 }}
			data={DataIcon}
			renderItem={_renderItem}
			keyExtractor={(item) => item.id.toString()}
			numColumns={4}
			showsVerticalScrollIndicator={false}
			scrollEnabled={false}
		/>
	)
}

function DashboardNew({ navigation }: PropsDashboard) {

	const selector = useSelector((state: any) => state.auth)
	const { user } = selector
	const { t, i18n } = useTranslation();
	const [listIcon, setListIcon] = useState<PropsListScreen[]>([])
	const dataStar: dataStar[] = [
		{
			id: 1,
			rated: 1
		},
		{
			id: 2,
			rated: 2
		},
		{
			id: 3,
			rated: 4
		},
		{
			id: 4,
			rated: 4
		},
	]
	const dataCourse = [
		{
			id: 1,
			des: 'HR Employees'
		},
		{
			id: 2,
			des: 'HR professionals'
		},
		{
			id: 3,
			des: 'Technology'
		},
		{
			id: 4,
			des: 'Dedicated mobile'
		},
	]
	const [data, setData] = useState({
		backGroud: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/290942541_395928692516693_5123194549793268467_n.png?_nc_cat=101&ccb=1-7&_nc_sid=dd9801&_nc_ohc=StmCu42kYZUAX_oGkZD&tn=NR0ofZe4cv8iwi9A&_nc_ht=scontent.fhan1-1.fna&edm=ADwHzz8EAAAA&oh=00_AT8Tg2cRkPaOT2Mpkc-0R402ijpnQEnVtuDAW1TbPNL3Vw&oe=635BF2F9',
		title: 'Thông báo thay đổi thời gian làm việc',
		color: Colors.black
	})
	const focus = async () => {
		const all = {
			id: 99,
			name: 'Tất cả',
			image: SvgAll,
			count: 0
		}
		const listMenu = await AsyncStorageMenuDashboard.get()
		console.log('listMenu...', listMenu)
		if (listMenu) {
			setListIcon(listMenu.concat(all))
		} else {
			setListIcon(dataFlatList.concat(all))
		}
	}
	const legend: any = {
		enabled: true,
		textSize: fontSize.XXS,
		form: 'CIRCLE',
		horizontalAlignment: "RIGHT",
		verticalAlignment: "CENTER",
		orientation: "VERTICAL",
		wordWrapEnabled: true,
	}
	const dataPieChart: any = {
		dataSets: [{
			values: [
				{ value: 45, label: 'HĐ 1 năm' },
				{ value: 21, label: 'HĐ 2 năm' },
				{ value: 15, label: 'HD 3 năm' },
				{ value: 9, label: 'HD thử việc' },
				{ value: 15, label: 'HĐ không thời hạn' }],
			label: 'Giá trị tham chiếu',
			config: {
				colors: [processColor('#FF8D5D'), processColor('#FECB7F'), processColor('#D6ED8B'), processColor('#D2D2D2'), processColor('#B8DEAB')],
				valueTextSize: 10,
				valueTextColor: processColor('black'),
				sliceSpace: 1,
				color: 'black',
				// textColor: processColor('black'),
				// textColor: 'red',
				selectionShift: 5,
				// xValuePosition: "OUTSIDE_SLICE",
				// yValuePosition: "OUTSIDE_SLICE",
				valueFormatter: "#.#'%'",
				valueLineColor: processColor('green'),
				valueLinePart1Length: 10
			}
		}]
	}
	const highlights: any = [{ x: 1 }]

	const dataBarChart = {
		legend: {
			enabled: true,
			textSize: fontSize.extraSmall,
			form: 'SQUARE',
			formSize: fontSize.extraSmall,
			xEntrySpace: 10,
			yEntrySpace: 5,
			formToTextSpace: 5,
			wordWrapEnabled: true,
			maxSizePercent: 0.5,
			// textColor: 'black'
		},
		data: {
			dataSets: [{
				values: [{ y: 90 }, { y: 95 }, { y: 100 }, { y: 103 }, { y: 108 }, { y: 113 }, { y: 115 }, { y: 117 }, { y: 119 }],
				label: 'Bar dataSet',
				textColor: 'black',
				config: {
					valueTextColor: processColor('black'),
					color: processColor('#D2D2D2'),
					barShadowColor: processColor('#D2D2D2'),
					highlightAlpha: 90,
					highlightColor: processColor('#D2D2D2'),
				}
			}],

			config: {
				barWidth: 0.7,
			}
		},
		highlights: [{ x: 3 }, { x: 6 }],
		xAxis: {
			valueFormatter: ['2008', '2010', '2014', '2016', '2018', '2020', '2021', '2022', '2023'],
			granularityEnabled: false,
			textColor: processColor('black'),
			granularity: 1,
		}
	}
	useEffect(() => {
	}, [])
	const themes = useThemeColors().themes || 'default'
	console.log('themeshome...', themes)

	return (
		<ScreenHeader
			hideHeader={true}
		>
			<View style={{ flex: 1, backgroundColor: NewColor[themes].primary }}>
				<NewHeader
					avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuI-9U2TqQCNxi8x5tWoS8xxizecZxUFhQA&usqp=CAU'}
					fullName={'somethingL'}
				/>
				<View style={{
					flex: 1,
					backgroundColor: NewColor[themes].background.screen,
					borderTopLeftRadius: MARGIN2,
					borderTopRightRadius: MARGIN2,
				}}>

					<ScrollView
						style={{
							flex: 1,
						}}
						showsVerticalScrollIndicator={false}
					>
						<View style={{
							height: Pixel125 + MARGIN2,
							marginTop: 5
						}}>
							<NewsWidgit
								navigation={navigation}
								data={data}
							/>
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<NavigationEvents
								onWillFocus={focus}
							/>

							<View style={styles.controldefault}>
								<ItemView
									onPress={() => navigation.navigate('GPSCheckIn')}
									title={'Chấm công GPS'}
									des={'Chụp ảnh'}
									icon={<SvgGPS color={NewColor[themes].primary} width={22} height={22} />} />
								<View style={{ width: Pixel10 }}></View>
								<ItemView
									onPress={() => navigation.navigate('ScanQR')}
									title={'Chấm công QR CODE'}
									des={'Quét mã QR'}
									icon={<SvgQrCheckIn color={NewColor[themes].primary} width={22} height={22} />} />
							</View>
							<View style={styles.controldefault2}>
								<ItemView
									onPress={() => navigation.navigate('TimeSheetsWebview')}
									title={'Bảng lương'}
									des={''}
									icon={<SvgJoboard color={NewColor[themes].primary} width={22} height={22} />} />
								<View style={{ width: Pixel10 }}></View>
								<ItemView
									onPress={() => navigation.navigate('PayCheckStack')}
									title={'Phiếu lương'}
									des={''}
									icon={<SvgPaycheck color={NewColor[themes].primary} width={22} height={22} />} />
							</View>

							<View style={[styles.wrapFlat, listIcon.length < 5 && { height: VIEW_LIST1 }]}>
								<ListScreen
									navigation={navigation}
									DataIcon={listIcon}
								/>
							</View>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								style={[styles.earlylate, { backgroundColor: NewColor[themes].primarySecondary }]}>
								<View style={styles.viewearly}>
									<ItemEarlyLater
										style={{ marginHorizontal: 5 }}
										title={'Đi muộn'}
										time={6}
										icon={<SvgTimeLate width={27} height={27} />} />
									<ItemEarlyLater
										style={{ marginHorizontal: 5 }}
										title={'Về sớm'}
										time={9}
										icon={<SvgLeaveEarly width={27} height={27} />} />
									<ItemEarlyLater
										style={{ marginHorizontal: 5 }}
										title={'Làm thêm'}
										time={69}
										icon={<SvgPartTime width={27} height={27} />} />
								</View>
							</ScrollView>
							<PieChartView data={dataPieChart} legend={legend} highlights={highlights} />

							<View style={{
								width: '90%',
								height: Pixel210,
								// marginVertical: 20,
								marginBottom: MARGIN,
								backgroundColor: 'white',
								marginHorizontal: MARGIN2,
								borderRadius: MARGIN2

							}}>
								<View style={{
									marginVertical: Pixel16,
									marginHorizontal: MARGIN2,
									borderBottomWidth: Pixel2,
									borderBottomColor: 'gray',
									marginBottom: MARGIN
								}}>
									<Text style={{ fontSize: fontSize.small, fontWeight: '700', marginVertical: 5 }}>
										Biểu đồ thống kê số nhân viên/năm
									</Text>
								</View>
								<BarChartScreen
									legend={dataBarChart.legend}
									data={dataBarChart.data}
									xAxis={dataBarChart.xAxis}
									highlights={dataBarChart.highlights}
									animation={2000}
									drawBarShadow={false}
									drawValueAboveBar={true}
								/>
							</View>
							<ScrollView horizontal style={styles.indexofemployees}>
								<ProcessChartIndex percent={69} style={{ marginHorizontal: 5 }} />
								<CourseOfEmployees style={{ marginHorizontal: 5 }} title={dataCourse} />
								<RankOfEmployees style={{ marginHorizontal: 5 }} datastar={dataStar} />
							</ScrollView>
							{/* <View style={{ flex: 1, flexDirection: 'row', marginTop: MARGIN }}>
								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									style={{ flex: 1, flexDirection: 'row', height: 110 * Metrics.ratioH }}
								>
									<View style={{ flexDirection: 'row', flex: 1 }}>
										<ItemInfo
											IconCenter={SvgLate}
											textTop='Đi muộn'
											textCenter='10'
											textBottom='Phút'
										/>
										<ItemInfo
											IconCenter={SvgEarly}
											textTop='Về sớm'
											textCenter='10'
											textBottom='Phút'
										/>
										<ItemInfo
											IconCenter={SVGWFH}
											textTop='Làm thêm'
											textCenter='10'
											textBottom='giờ'
										/>
										<ItemInfo
											IconCenter={SvgReward}
											textTop='Khen thưởng'
											textCenter='0'
											textBottom='Lần'
										/>
									</View>
								</ScrollView>
							</View> */}
						</View>
					</ScrollView>
				</View>
			</View>
		</ScreenHeader>
	)
}

export default DashboardNew;