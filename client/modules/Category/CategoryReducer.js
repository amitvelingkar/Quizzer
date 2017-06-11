import { ADD_CATEGORY, ADD_CATEGORIES, DELETE_CATEGORY } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY :
      return {
        data: [action.category, ...state.data],
      };

    case ADD_CATEGORIES :
      return {
        data: action.categories,
      };

    case DELETE_CATEGORY :
      return {
        data: state.data.filter(category => category.id !== action.id),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all categories
export const getPosts = state => state.categories.data;

// Get category by id
export const getPost = (state, id) => state.categories.data.filter(category => category.id === id)[0];

// Export Reducer
export default PostReducer;
