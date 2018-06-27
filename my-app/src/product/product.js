import React, {Component} from 'react';
import './product.css';

class Product extends Component {
    render() {
        return(
        <div className="card">
            <div className="card-block">
              <h4 className="card-title">Soloman Sea's Signature  {this.props.title} </h4>
              <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
              <p className="card-text">Price: ${this.props.price}</p>
              <a href="#" className="btn btn-primary"> Add to Wish list</a>
            </div>
          </div>

        );
    }
}

export default Product;
