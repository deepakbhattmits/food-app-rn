
import React from 'react';
import {    
            createStackNavigator,
            createBottomTabNavigator,
            createAppContainer
        } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
    }
}
);
const MealsFavTabNavigator = createBottomTabNavigator({
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
                    }
                },
        Favorites: { screen: FavoritesScreen,
            navigationOptions: {
                tabBarLabel:'Favorites !',
                tabBarIcon: ( tabInfo ) => {
                        return (<Ionicons 
                                    name="ios-star" 
                                    size={ 25 } 
                                    color={ tabInfo.tintColor } 
                            />);
                },
                }
        },
    },
    {
        tabBarOptions:{
            activeTintColor: Colors.accentColor,
        }
    }
);

export default createAppContainer(MealsFavTabNavigator); 