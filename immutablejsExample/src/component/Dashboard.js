import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    const { productState, fetchProducts } = this.props;
    const isCompleted = productState.get('isCompleted');
    if (!isCompleted) {
      fetchProducts();
    }
  }

  componentWillReceiveProps({ productState, fetchProducts }) {
    const isCompleted = productState.get('isCompleted');
    const currentIsInProgress = this.props.productState.get('isInProgress');
    if (currentIsInProgress && !isCompleted) {
      fetchProducts();
    }
  }

  renderProducts() {
    const { productState } = this.props;
    const products = productState.get('products');
    return products.map((product, index) => (
      <div key={index}>
        <span>{product.name} </span>
      </div>
    ));
  }

  render() {
    const { productState } = this.props;
    const isInProgress = productState.get('isInProgress');
    const isCompleted = productState.get('isCompleted');
    if (isInProgress || !isCompleted) {
      return <div>Its loading....</div>;
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="product_container">
          <h1>Product section</h1>
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productState: state.get('productReducer')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
