import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = props =>  {
    return (
       <View style={ styles.main }>
           <Text>
                FavoritesScreen 
           </Text>
       </View>
    )
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default FavoritesScreen;
