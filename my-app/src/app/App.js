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

      this.loadData();
    }

    loadData = () => {
      http.getProducts().then(products => {
          console.log(products);
      }, err => {

      });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h1 className="App-title">Welcome to Soloman Sea Products</h1>
        </div>
        <div className="container App-main">
          <div className="row">
          <Product price="35.00" title="face and body mask" imgUrl="https://www.foodmatters.com/media/images/assets/bentonite.jpg"/>
          <Product price="20.00" title="bath and salt scrub" imgUrl="https://www.foodmatters.com/media/images/assets/bentonite.jpg"/>
          <Product price="15.00" title="volcanic clay" imgUrl="https://www.foodmatters.com/media/images/assets/bentonite.jpg"/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
