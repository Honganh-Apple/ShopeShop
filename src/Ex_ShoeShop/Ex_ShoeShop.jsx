import React, { Component } from "react";
import { dataShoe } from "./Data_Shoe";
import Detail_Shoe from "./Detail_Shoe";
import GioHang from "./GioHang";
import List_Shoe from "./List_Shoe";

export default class Ex_ShoesShop extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
    gioHang: [],
  };

  /*
  handleXemChiTiet = (shoe) => {
    //c1//
    this.setState({ detailShoe: shoe });
  };*/
  //c2
  handleViewDetail = (idShoe) => {
    let index = this.state.shoeArr.findIndex((item) => {
      return item.id == idShoe;
    });
    index !== -1 && this.setState({ detailShoe: this.state.shoeArr[index] });
  };
  //push vao gio hang
  handleAddtoCart = (shoe) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == shoe.id;
    });
    //th1 sp chua co trong gio hang
    if (index == -1) {
      let spGioHang = { ...shoe, soLuong: 1 };
      cloneGioHang.push(spGioHang);
    } else {
      //Tth2 sp da co trong gio hang
      cloneGioHang[index].soLuong++;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };
  //xoa
  handleRemoveItem = (idshoe) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == idshoe;
    });
    if (index !== -1) {
      cloneGioHang.splice(index, 1);
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  handleTangSoLuong = (idshoe, method) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idshoe;
    });

    if (index !== -1 && method == "add") {
      cloneGioHang[index].soLuong++;
    } else if (
      index !== -1 &&
      method == "sub" &&
      cloneGioHang[index].soLuong == 1
    ) {
      cloneGioHang.splice(index, 1);
    } else if (index !== -1 && method == "sub") {
      cloneGioHang[index].soLuong--;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  render() {
    return (
      <div>
        <GioHang
          gioHang={this.state.gioHang}
          handleRemoveItem={this.handleRemoveItem}
          handleTangSoLuong={this.handleTangSoLuong}
        />
        <List_Shoe
          data={this.state.shoeArr}
          handleViewDetail={this.handleViewDetail}
          handleAddtoCart={this.handleAddtoCart}
        />
        <Detail_Shoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
