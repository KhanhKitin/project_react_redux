import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductRequest, actDeleteProductRequest } from "../../actions";
class ProductListPage extends Component {
  
  componentDidMount() {
    this.props.fetchAllProduct();
  }

  onDelete = (id) => {
   this.props.deleteProduct(id);
  };

  
  render() {
    var { products } = this.props;
    return (
      <div className="col">
        <Link to="/product/add" className="btn btn-info mb-3 mt-4">
          Thêm sản phẩm
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProduct: (products) => {
      dispatch(actFetchProductRequest(products));
    },
    deleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
