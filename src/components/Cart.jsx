import React from 'react';
import { Link } from 'react-router-dom';
export default function Cart({ products, amount, checkOut, setLoadingFinished, updateStock, removeStock }) {


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

    return (

        <>

            <div className='col-2'>
                <h2>Cart Items</h2>
                {productsAddedTextEl}
            </div>

            <p>Total Price: {totalPrice} kr</p>

            <Link to="/"> <button onClick={setLoadingFinished} >Empty Cart</button></Link>

            <button onClick={() => { checkOut(); setLoadingFinished(); }}>Checkout</button>

        </>
    )
}