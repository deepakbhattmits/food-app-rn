import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';

const MealDetailScreen = props =>  {
    const mealId = props.navigation.getParam('categoryId');
    const selectedMealDetail = MEALS.find( el => el.id === mealId );
    const { imageUrl, duration, complexity, affordability, ingredients, steps } = selectedMealDetail;
    return (
        <ScrollView style={ styles.details }>
          
                <Image
                    style={ styles.img }
                    source={{ uri: imageUrl }}
                />
                <View style={ styles.mealDetails }>
                    <DefaultText>{ duration }m</DefaultText>
                    <DefaultText>{ complexity.toUpperCase() }</DefaultText>
                    <DefaultText>{ affordability.toUpperCase() }</DefaultText>
                </View>

                <Text style={ styles.headTitle}>Ingredients </Text>
                    { ingredients.map((el, i ) => 
                        <ListItem key={ i } style={ styles.list }>{ el }</ListItem>
                    )}                
                <Text style={ styles.headTitle}>Steps </Text>
                    { steps.map((el, i ) => 
                        <ListItem key={ i } style={ styles.list }>{ el }</ListItem>
                    )} 
           
       </ScrollView>
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
    mealDetails: {
        fontFamily:'open-sans',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#f4f4f4',
    },
    img: {
        width: '100%',
        height: 200,
    },
    headTitle:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
    },
   
});
export default MealDetailScreen;
