/** @format */

import React from 'react';
import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Text,
	Platform,
	ImageBackground,
	StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';
const MealItem = props => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.mealItem}>
			<TouchableCmp onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableCmp>
		</View>
	);
};
const styles = StyleSheet.create({
	mealRow: {
		flexDirection: 'row'
	},
	mealItem: {
		width: '100%',
		height: 200,
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10
	},
	mealHader: {
		height: '85%'
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 10
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: '#fff',
		textAlign: 'center'
	},
	mealText: {
		color: '#000'
	}
});

export default MealItem;
