import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import _ from 'lodash';
import searchProducts from '../actions/products';
import styles from '../components/SearchBox/SearchBox.css';
import SearchBox from '../components/SearchBox/SearchBox';
import UserList from '../components/UserList/UserList';

class UserSearchContainer extends Component {
  static propTypes = {
    searchProducts: PropTypes.func,
    products: PropTypes.object,
    searchCriterias: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })),
  };

  constructor(props) {
    super(props);

    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
  }

  componentDidMount() {
    if (_.isEmpty(this.props.searchCriterias) === false) {
      this.props.searchProducts(this.props.searchCriterias);
    }
  }

  handleSearchFormSubmit(searchCriterias) {
    const queryString = searchCriterias.map(item =>
      `${item.name}=${item.value}&`,
    );
    hashHistory.push(`/products/search?${queryString}`);
    this.props.searchProducts(searchCriterias);
  }

  render() {
    return (
      <div className={styles.search_container}>
        <SearchBox searchCriterias={this.props.searchCriterias} handleSearchFormSubmit={this.handleSearchFormSubmit} />
        <div className="search_result">
          {
            _.isEmpty(this.props.products.items)
            ? 'There is no product match your search'
            : <UserList products={this.props.products.items}  />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  searchCriterias: [
    {
      name: 'q',
      value: ownProps.location.query.nameCriteria,
    },
  ],
});

const mapDispatchToProps = dispatch => ({
  searchProducts: searchCriterias => dispatch(searchProducts(searchCriterias)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSearchContainer);
