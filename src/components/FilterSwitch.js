/** @format */

import React from 'react';
import { View, Text, Switch, Platform, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
const FilterSwitch = props => {
	// console.log('test : ', props);
	return (
		<View style={styles.filterContainer}>
			<Text>{props.title}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginVertical: 15,
		alignItems: 'center'
	}
});
export default FilterSwitch;
