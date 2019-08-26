import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';

const CategoryMealsScreen = props =>  {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((el)=> el.id === catId)
    return (
       <View style={ styles.main }>
           <Text>
              { selectedCategory.title }
           </Text>
           <Button 
                title='Go to Meal detail !'
                onPress={ ()=> { props.navigation.replace('CategoryDetail') } }
            />
            <Button 
                title='Go Back'
                onPress={ 
                            ()=> { 
                                props.navigation.goBack();
                            }
                        }
            />
       </View>
    )
};
CategoryMealsScreen.navigationOptions = navigationData => {
   const catId = navigationData.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId )
 //  console.log('SUKU SUKU : ', selectedCategory.title)
   return {
    headerTitle: selectedCategory.title,
};
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default CategoryMealsScreen;
