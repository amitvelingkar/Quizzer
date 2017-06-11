import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './CategoryListItem.css';

function CategoryListItem(props) {
  return (
    <div className={styles['single-category']}>
      <h3 className={styles['category-title']}>
        <Link to={`/categories/${props.category.slug}-${props.category.id}`} >
          {props.category.name}
        </Link>
      </h3>
      <p className={styles['category-url']}>{props.category.wikiUrl}</p>
      <p className={styles['category-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteCategory" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

CategoryListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
    selector: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CategoryListItem;
