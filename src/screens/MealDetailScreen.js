import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = props =>  {
    // console.log('TEST : ', props.navigation.getParam('categoryId'));
    const mealId = props.navigation.getParam('categoryId');
    const selectedMealDetail = MEALS.find( el => el.id === mealId );
    // console.log('TEST meal id: ',mealId ,'Details: ',selectedMealDetail);

    return (
       <View style={ styles.main }>
           <Text>
                { selectedMealDetail.title }
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
MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('categoryId');
    const selectedMealDetail = MEALS.find( el => el.id === mealId );
    return {
        headerTitle: selectedMealDetail.title,
        headerRight: <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                        <Item 
                            title='Favourite'
                            iconName='ios-star'
                            onPress={ ()=> { console.log('Mark as Favourite')}}
                        />
                    </HeaderButtons>,
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default MealDetailScreen;
