import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
//import styles from './Category.css';

// Import Components
// TODO - to be added

// Import Actions
import { fetchCategories } from '../../CategoryActions';

// Import Selectors
import { getCategories } from '../../CategoryReducer';


class CategoryListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }
  render() {
    return (
      <div>
        Showing Categories
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CategoryListPage.need = [() => { return fetchCategories(); }];

const mapStateToProps = (state) => {
  return {
    categories: getCategories(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

CategoryListPage.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListPage);
