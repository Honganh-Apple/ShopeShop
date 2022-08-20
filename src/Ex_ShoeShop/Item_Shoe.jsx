import React, { Component, Fragment } from "react";

export default class Item_Shoe extends Component {
  render() {
    let { name, image, description, price } = this.props.detail;
    return (
      <Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-title" style={{ color: "red" }}>
              {name}
            </h6>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{ color: "blue" }}>
              Price: ${price}
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.props.handleAddtoCart(this.props.detail);
              }}
            >
              Add to cart
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                this.props.handleViewDetail(this.props.detail.id);
              }}
            >
              More Details
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
