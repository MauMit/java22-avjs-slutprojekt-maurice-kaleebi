import React from 'react';
import { Link } from 'react-router-dom';

//Calculate and display the total price of all items and show the info while adding them to the cart, provides a button for checkout and emptycart

export default function Cart({ products, amount, checkOut, setLoadingFinished, updateStock, removeStock }) {


    const productsInCart = [];
    let totalPrice = 0;
    //Shows the amount of products that has been added and shows total price. Uses buttons to remove and add products in the cart

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

            <div className='col-2'>
                <h2>Cart Items</h2>
                {productsInCart}
            </div>

            <p>Total Price: {totalPrice} kr</p>

            <Link to="/"> <button onClick={setLoadingFinished} >Empty Cart</button></Link>

            <button onClick={() => { checkOut(); setLoadingFinished(); }}>Checkout</button>

        </>
    )
}
