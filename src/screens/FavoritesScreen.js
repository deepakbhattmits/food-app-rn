import React from 'react'
import MealList from "../components/MealList";
import { MEALS } from '../../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


const FavoritesScreen = props =>  {
    const favMeals = MEALS.filter(el=> el.id === 'm1' || el.id === 'm2');
    return (
        <MealList
            listData={ favMeals } 
            navigation={ props.navigation }
        />
    )
};

 FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                        <Item 
                            title='Menu'
                            iconName='ios-menu'
                            onPress={ ()=> {
                            navData.navigation.toggleDrawer();
                            }}
                        />
                    </HeaderButtons>,
    }
  };
export default FavoritesScreen;
