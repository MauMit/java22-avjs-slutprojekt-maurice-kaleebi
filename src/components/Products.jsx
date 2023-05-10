import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

export default function Products({ products, updateStock, amount, removeStock }) {

  const productsAddedTextEl = [];
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    if (amount[i] != 0) {
      productsAddedTextEl.push(<div key={i}><h2 key={i}> <img className="smaller" src={products[i].img} /> {products[i].name} - {products[i].price} kr - Qty: {amount[i]} </h2>

        <button className='add' onClick={() => updateStock(products[i], i)}>+</button>

        <button className='remove' onClick={() => removeStock(products[i], i)}>-</button>   </div >

      );
      totalPrice += amount[i] * products[i].price
    }
  }

  console.log(totalPrice)

  return (
    <>

      <div className="row">

        {products.map((product, index) => (
          <Product key={index} product={product} updateStock={updateStock} index={index}></Product>
        ))}

      </div>

      <div>
        <h2>Cart Items</h2>

        {productsAddedTextEl}

        <p>Total Price: {totalPrice} kr</p>

        <Link to="/cart">
          <button >Go to Checkout</button>
        </Link>
      </div>


    </>


  )
}
