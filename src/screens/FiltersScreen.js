import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScreen = props =>  {
    return (
       <View style={ styles.main }>
           <Text>
                FiltersScreen 
           </Text>
       </View>
    )
};
FiltersScreen.navigationOptions = navData => {
        return {
            headerTitle: 'Filter Meals',
            headerLeft: (
                            <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                                <Item 
                                    title='Menu'
                                    iconName='ios-menu'
                                    onPress={ ()=> {
                                    navData.navigation.toggleDrawer();
                                    }}
                                />
                            </HeaderButtons>
                        ),
        }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default FiltersScreen;
