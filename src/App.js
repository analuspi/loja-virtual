import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./context";

function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
        </Router>
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
