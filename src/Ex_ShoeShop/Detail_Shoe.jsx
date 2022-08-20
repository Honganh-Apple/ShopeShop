import React, { Component } from "react";

export default class Detail_Shoe extends Component {
  render() {
    let { image, name, price, description, quantity } = this.props.detailShoe;
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <img src={image} alt="" className="w-100" />
          </div>
          <div className="col-8 text-primary text-left">
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </div>
    );
  }
}
