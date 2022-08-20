import React, { Component } from "react";
import Item_Shoe from "./Item_Shoe";

export default class List_Shoe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((item, index) => {
            return (
              <div key={index.toString() + item.id} className="col-3">
                <Item_Shoe
                  detail={item}
                  handleViewDetail={this.props.handleViewDetail}
                  handleAddtoCart={this.props.handleAddtoCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
