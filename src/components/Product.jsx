import React from 'react';

export default function Product({ product, updateStock, index }) {

    //display the product info from my firebase


    return (
        <div>
            <img className="small" src={product.img} />
            <h3>{product.name}</h3>
            <div>{product.price} kr</div>
            <h5> Stock: {product.stock}</h5>
            <button onClick={() => updateStock(product, index)}  >Add To Cart</button>
        </div>
    )
}
