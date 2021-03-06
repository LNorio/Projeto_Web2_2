import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import ProductsSearch from "./components/ProductSearch"
import Buy from './components/Buy'
import AddProd from './components/AddProd'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/prod" component={ProductsSearch}/>
          <Route exact path="/buy" component={Buy}/>
          <Route exact path="/add_prod" component={AddProd}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;