/** @format */

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterSwitch from '../components/FilterSwitch';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const FiltersScreen = props => {
	const { navigation } = props;
	console.log('TEST : ', navigation);
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegen, setIsVegen] = useState(false);
	const [isVegeterian, setIsVegeterian] = useState(false);
	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenfree: isGlutenFree,
			lactosefree: isLactoseFree,
			vegan: isVegen,
			vegeterian: isVegeterian
		};
		console.log(appliedFilters);
	}, [isGlutenFree, isLactoseFree, isVegen, isVegeterian]);
	useEffect(() => {
		navigation.setParams({ save: saveFilters }, [saveFilters]);
	});
	return (
		<View style={styles.main}>
			<Text style={styles.title}>Available Filters / Restrictions </Text>
			<FilterSwitch
				title='Gluten-Free'
				state={isGlutenFree}
				onChange={newValue => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				title='Lactose-Free'
				state={isLactoseFree}
				onChange={newValue => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				title='Vegan-Free'
				state={isVegen}
				onChange={newValue => setIsVegen(newValue)}
			/>
			<FilterSwitch
				title='Vegeterian'
				state={isVegeterian}
				onChange={newValue => setIsVegeterian(newValue)}
			/>
		</View>
	);
};
FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Menu'
					iconName='ios-menu'
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Save'
					iconName='ios-save'
					onPress={navData.navigation.getParams('save')}
				/>
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	}
});
export default FiltersScreen;
