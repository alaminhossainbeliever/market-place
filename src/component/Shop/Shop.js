
import React from 'react';
import fakeData from '../../fakedata';
import Product from '../Product/Product';
import "./Shop.css"


const Shop = () => {
    const ProductData=fakeData.slice(0,10)
    console.log(fakeData);
    return (
        <div className='shopContainer'>
                <div className="product">
                {
                  ProductData.map(pd=><Product Product={pd}></Product>)
                }
                </div>
                <div className="review">
                <h2>This is review</h2>
                </div>
            </div>
    );
};

export default Shop;