import React, { Component } from "react";

export default class GioHang extends Component {
  renderTbody = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={item.id + index.toString()}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            {""}
            <img src={item.image} alt="" style={{ width: 80 }} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleTangSoLuong(item.id, "sub");
              }}
              className="btn btn-success"
            >
              -
            </button>
            <span className="mx-3"> {item.soLuong}</span>

            <button
              onClick={() => {
                this.props.handleTangSoLuong(item.id, "add");
              }}
              className="btn btn-primary"
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleRemoveItem(item.id);
              }}
            >
              Delete All
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container py-5">
        <table className="table text-left">
          <thead className="text-primary">
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Image</td>
              <td>Quantity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
        {this.props.gioHang == 0 && (
          <p className="mt-5 text-center">Nothing in your cart</p>
        )}
      </div>
    );
  }
}
