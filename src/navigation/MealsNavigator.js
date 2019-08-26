import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
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

export default createAppContainer(MealsNavigator); 