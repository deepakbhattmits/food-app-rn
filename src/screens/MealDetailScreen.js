import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailScreen = props =>  {
    return (
       <View style={ styles.main }>
           <Text>
                Meal Detail Screen 
           </Text>
           <Button 
                title='Go Back to Categories !'
                onPress={
                    () => {
                        props.navigation.popToTop()
                    }
                }
           />
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
export default MealDetailScreen;
