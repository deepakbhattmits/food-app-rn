/** @format */

import { MEALS } from '../../../data/dummy-data';
const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
};
const mealsReducer = (state = { initialState }, action) => {
	// switch( action.type ) {
	//     case :
	//         return
	//     default:
	//         return
	// }
	return state;
};
export default mealsReducer;
