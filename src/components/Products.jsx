import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
 

//Calculate and display the total price of all items and show the info while adding them to the side cart
export default function Products({ products, updateStock, amount, removeStock }) {

    const productsInCart = [];
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        if (amount[i] != 0) {
            productsInCart.push(<div key={i}><h2 key={i}> <img className="smaller" src={products[i].img} /> {products[i].name} - {products[i].price} kr - Qty: {amount[i]} </h2>

                <button className='add' onClick={() => updateStock(products[i], i)}>+</button>

                <button className='remove' onClick={() => removeStock(products[i], i)}>-</button>   </div >

            );
            totalPrice += amount[i] * products[i].price
        }
    }


    return (
        <>

            <div className="row">

                {products.map((product, index) => (
                    <Product key={index} product={product} updateStock={updateStock} index={index}></Product>
                ))}

            </div>

            <div>
                <h2>Cart Items</h2>

                {productsInCart}

                <p>Total Price: {totalPrice} kr</p>

                <Link to="/cart">
                    <button >Go to Checkout</button>
                </Link>
            </div>


        </>


    )
}
