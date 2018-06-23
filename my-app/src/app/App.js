import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props) {
      super(props);
      //state goes in constructor
      this.state = {products:[]};
        //bind functions
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);

      this.loadData();
    }

    loadData = () => {
      var self = this;
      http.getProducts().then(data => {
          self.setState({products: data})
      }, err => {

      });
    }
    productList = () => {
      const list = this.state.products.map((product) =>

          <div className="col-sm-4" key={product._id}>
            <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
          </div>


        );
        return (list);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Welcome to Soloman Sea Products</h1>
        </div>
        <div className="container App-main">
          <div className="row">
            {this.productList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
