import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: ""
    }
  }
  update = (e) => {
    console.log(e.target.value);
    this.props.onUpdate(e.target.value);
    this.setState({fieldVal: e.target.value});
  };
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <input type="text"onChange={this.update}
          value={this.state.fieldVal} />
        <Link to="/App">Go to Results</Link>
      </div>
    );
  }
  
}
 
export default Home;
