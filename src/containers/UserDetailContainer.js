import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserDetail from '../components/UserDetail/UserDetail';
import { getProductDetail } from '../actions/actions';

class UserDetailContainer extends React.Component {


  componentDidMount() {
    this.props.getProductDetail(this.props.id);
  }

  render() {
    return (
      <UserDetail products={this.props.products}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  id: ownProps.params.id,
  product: state.products.selectedItem,
});

const mapDispatchToProps = (dispatch) => {
  const dispatchers = {
    getProductDetail: (id) => {
      dispatch(getProductDetail(id));
    },

  };
  return dispatchers;
};

UserDetailContainer.propTypes = {
    getProductDetail: PropTypes.func,
    id: PropTypes.string,
    products: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);
