/** @format */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

const ListItem = props => {
	// console.log('TEST :', props);
	return (
		<View style={styles.list}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};
const styles = StyleSheet.create({
	list: {
		marginHorizontal: 5,
		padding: 10,
		marginVertical: 10,
		borderColor: '#ccc',
		borderWidth: 2
	}
});
export default ListItem;
