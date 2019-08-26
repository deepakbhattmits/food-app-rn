import React from 'react';
import {
      FlatList,
} from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
     <CategoryGridTile 
        color={ itemData.item.color }
        title={ itemData.item.title }
        onPress={() => {
            props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
                categoryId: itemData.item.id
            }
            });
        }}
     />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;