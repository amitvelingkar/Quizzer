import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CategoryCreateWidget.css';

export class CategoryCreateWidget extends Component {
  addCategory = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addCategory(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddCategory ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewCategory" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.categoryTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.categoryContent} className={styles['form-field']} ref="content" />
          <a className={styles['category-submit-button']} href="#" onClick={this.addCategory}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

CategoryCreateWidget.propTypes = {
  addCategory: PropTypes.func.isRequired,
  showAddCategory: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(CategoryCreateWidget);
