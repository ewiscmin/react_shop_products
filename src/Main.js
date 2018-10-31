
import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import App from "./App";
class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fieldVal: ""
    }
    this.onUpdate = this.onUpdate.bind(this);
 }
 onUpdate = (val) => {
  this.setState({
    fieldVal: val
  })
 };

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA Shopper</h1>

          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/app">App</NavLink></li>
          </ul>
          <ul className="footer">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/app">App</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" render={(props)=><Home{...props} onUpdate={this.onUpdate}/>}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/app" render={(props)=><App{...props} passedVal={this.state.fieldVal}/>}/>
          </div>
          <div>
          
     </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;