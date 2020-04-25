import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actgetProductRequest,
  actUpdateProductRequest,
} from "../../actions";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      textName: "",
      textPrice: "",
      checkStatus: "",
    };
  }

  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    const product = {
      id: this.state.id,
      name: this.state.textName,
      price: this.state.textPrice,
      status: this.state.checkStatus,
    };
    if (this.state.id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    this.props.history.goBack();
  };

  componentDidMount() {
    console.log("componentDidMount");
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        textName: itemEditing.name,
        textPrice: itemEditing.price,
        checkStatus: itemEditing.status,
      });
    }
  }

  render() {
    var { textName, textPrice, checkStatus } = this.state;
    return (
      <div className="col-6 mt-3">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              name="textName"
              className="form-control"
              value={textName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input
              type="number"
              name="textPrice"
              className="form-control"
              value={textPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
          </div>
          <div className="checkbox mb-2">
            <label>
              <input
                name="checkStatus"
                type="checkbox"
                className="mr-2"
                value={checkStatus}
                onChange={this.onChange}
                checked={checkStatus}
              />
              Còn hàng
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
            Lưu Lại
          </button>
          <Link to="/product-list" className="btn btn-danger ml-3">
            Trở lại
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actgetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
