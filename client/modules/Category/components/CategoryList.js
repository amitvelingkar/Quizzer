import React, { PropTypes } from 'react';

// Import Components
import CategoryListItem from './CategoryListItem/CategoryListItem';

function CategoryList(props) {
  return (
    <div className="listView">
      {
        props.categories.map(category => (
          <CategoryListItem
            category={category}
            key={category.id}
            onDelete={() => props.handleDeleteCategory(category.id)}
          />
        ))
      }
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
    selector: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
};

export default CategoryList;
