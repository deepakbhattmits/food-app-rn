import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props =>  {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf( catId ) >= 0 );

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={ itemData.item.title }
                image={ itemData.item.imageUrl }
                affordability={ itemData.item.affordability }
                complexity={ itemData.item.complexity }
                duration={ itemData.item.duration }
                onSelectMeal={() => {
                        props.navigation.navigate({
                        routeName: 'CategoryDetail',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    } 
    return (
       <View style={ styles.screen }>
           <FlatList 
                data={ displayedMeals }
                keyExtractor={ ( item, index ) => item.id }
                renderItem={ renderMealItem }
                style={ { width: '100%' }}
            />
       </View>
    )
};
CategoryMealsScreen.navigationOptions = navigationData => {
   const catId = navigationData.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId )
   return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default CategoryMealsScreen;
