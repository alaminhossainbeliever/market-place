import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,name,seller,price,stock} =props.Product;
    return (
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <a href="/item"><h3>{name}</h3></a>
          <p><small>By: {seller}</small></p>
          <h4>Price: ${price}</h4>
          <p>In stock {stock} now</p>
          <button>Add to cart</button>
          </div>
          
        </div>
    );
};

export default Product;