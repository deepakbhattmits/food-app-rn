/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam('categoryId');
	// console.log('TEST :', catId);
	// const availableMeals = useSelector(state => state.meals.filteredMeals)
	// const displayedMeals = availableMeals.filter( meal => meal.categoryIds.indexOf( catId ) >= 0 );

	const availableMeals = useSelector(state => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				affordability={itemData.item.affordability}
				complexity={itemData.item.complexity}
				duration={itemData.item.duration}
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
	};
	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
	return {
		headerTitle: selectedCategory.title
	};
};

export default CategoryMealsScreen;
