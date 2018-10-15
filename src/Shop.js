import React, { Component } from "react";
import WebframeHeadless from './pagedraw/webframeheadless';
class Shop extends Component {
  render() {
    return (
      <div>
        <h2>SHOP</h2>
        <p>Choose from our selection of shoes:</p>
        
        <WebframeHeadless />
      </div>
    );
  }
}
 
export default Shop;