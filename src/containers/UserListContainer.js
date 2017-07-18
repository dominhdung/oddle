import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList/UserList';
import { requestProducts } from '../actions/actions';

class UserListContainer extends React.Component {
  static propTypes = {
    products: PropTypes.shape({
      items: PropTypes.array,
      isFetching: PropTypes.bool,
    }),
    fetchProducts: PropTypes.func,
  };

  componentDidMount() {
    const { products, fetchProducts } = this.props;
    if (!products.isFetching) {
      fetchProducts();
    }
  }

  render() {
    if (this.props.products.items.length === 0) {
      return null;
    }
    return <UserList products={this.props.products.items}/>;
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => {
  const dispatchers = {
    fetchProducts: () => {
      dispatch(requestProducts());
    },

  };
  return dispatchers;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
