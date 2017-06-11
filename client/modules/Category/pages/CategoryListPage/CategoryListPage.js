import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CategoryList from '../../components/CategoryList';
//import CategoryCreateWidget from '../../components/CategoryCreateWidget/CategoryCreateWidget';

// Import Actions
import { addCategoryRequest, fetchCategories, deleteCategoryRequest } from '../../CategoryActions';
//import { toggleAddCategory } from '../../../App/AppActions';

// Import Selectors
//import { getShowAddCategory } from '../../../App/AppReducer';
import { getCategories } from '../../CategoryReducer';

class CategoryListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleDeleteCategory = category => {
    if (confirm('Do you want to delete this category')) { // eslint-disable-line
      this.props.dispatch(deleteCategoryRequest(category));
    }
  };
/*
  handleAddCategory = (name, title, content) => {
    this.props.dispatch(toggleAddCategory());
    this.props.dispatch(addCategoryRequest({ name, title, content }));
  };
*/
  render() {
    return (
      <div>
        <CategoryList handleDeleteCategory={this.handleDeleteCategory} categories={this.props.categories} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CategoryListPage.need = [() => { return fetchCategories(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    categories: getCategories(state),
  };
}

CategoryListPage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
    selector: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

CategoryListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CategoryListPage);
