
import React from 'react';
import {    
            createStackNavigator,
            createDrawerNavigator,
            createBottomTabNavigator,
            createAppContainer
        } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
};
const MealsNavigator = createStackNavigator({
    Categories: { screen: CategoriesScreen,
                    },
    CategoryMeals: { 
                    screen: CategoryMealsScreen,
                   
                },
    CategoryDetail: { 
                screen: MealDetailScreen,
            },
}, { 
    node: 'modal',
    defaultNavigationOptions: defaultStackNavigationOptions,
}
);
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
},{
    defaultNavigationOptions: defaultStackNavigationOptions,
});
const tabScreenConfig = {
        Meals: { screen: MealsNavigator,
                navigationOptions: {
                    tabBarLabel:'Meals !',
                    tabBarIcon: ( tabInfo ) => {
                        return (<Ionicons 
                                        name="ios-restaurant" 
                                        size={ 25 } 
                                        color={ tabInfo.tintColor } 
                                />);
                    },
                    tabBarColor: Colors.primaryColor,
                    }
                },
        Favorites: { screen: FavNavigator,
            navigationOptions: {
                tabBarIcon: ( tabInfo ) => {
                        return (<Ionicons 
                                    name="ios-star" 
                                    size={ 25 } 
                                    color={ tabInfo.tintColor } 
                            />);
                },
                tabBarColor: Colors.accentColor,
                }
        },
    };
const MealsFavTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(
    tabScreenConfig,
    { 
        activeTintColor: '#fff',
        shifting: true,
        // barStyle: {
        //     backgroundColor: Colors.primaryColor,
        // }
    }) 
: createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions:{
            activeTintColor: '#fff',
        }
    }
);
const FiltersNavigator= createStackNavigator({
    Filters: FiltersScreen,
},{
    defaultNavigationOptions: defaultStackNavigationOptions,
});
const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
})

export default createAppContainer(MainNavigator); 