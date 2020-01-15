/** @format */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
	console.log('test : ', props);
	return (
		<Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
	);
};
const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans',
		fontSize: 15
	}
});
export default DefaultText;
