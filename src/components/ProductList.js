import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {


    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="nossos" title="produtos" />
            <div className="row">
                <ProductConsumer>
                    {/* sempre passar o data na forma de arrow function anonima */}
                    {() => {
                        return <h1></h1>
                    }}
                </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}
