// Import Actions
import { ADD_CATEGORIES } from './CategoryActions';

// Initial State
const initialState = {};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORIES :
      return {
        data: action.categories,
      };
    default:
      return state;
  }
};

// get all categories
export const getCategories = state => state.categories.data;

export default CategoryReducer;
