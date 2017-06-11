import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Export Actions
export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function addCategoryRequest(category) {
  return (dispatch) => {
    return callApi('categories', 'category', {
      category: {
        name: category.name,
        wikiUrl: category.wikiUrl,
        selector: category.selector
      },
    }).then(res => dispatch(addCategory(res.category)));
  };
}

export function addCategories(categories) {
  return {
    type: ADD_CATEGORIES,
    categories,
  };
}

export function fetchCategories() {
  return (dispatch) => {
    return callApi('categories').then(res => {
      dispatch(addCategories(res.categories));
    });
  };
}

export function fetchCategory(id) {
  return (dispatch) => {
    return callApi(`categories/${id}`).then(res => dispatch(addCategory(res.category)));
  };
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    id,
  };
}

export function deleteCategoryRequest(id) {
  return (dispatch) => {
    return callApi(`categories/${id}`, 'delete').then(() => dispatch(deleteCategory(id)));
  };
}
