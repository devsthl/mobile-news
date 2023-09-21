/** @format */

import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { AsyncStorageFirstInitApp } from '../../Utils/AsyncStorageHelper';
import { Images } from '../../Themes';
import styles from './styles';

function CompanyImage() {
	const [companyCode, setCompanyCode] = useState('');

	useEffect(() => {
		async function getCompanyCode() {
			const obj = await AsyncStorageFirstInitApp.get();
			setCompanyCode(obj.companyCode);
		}

		getCompanyCode();
	}, []);
	return (
		<View style={styles.container}>
			{companyCode && companyCode.toUpperCase() !== 'TLSGDEV' ? (
				<Image
					defaultSource={Images.logoHiStaff}
					source={{
						uri: `http://mobileapi.tinhvanconsulting.com:12789/CustomerLogo/${companyCode}.png`,

					}}
					style={styles.logo}
				/>
			) : (
				<Image source={Images.logoHiStaff} style={styles.logo} />
			)}
		</View>
	);
}

export default CompanyImage;
