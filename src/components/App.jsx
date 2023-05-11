import '../css/App.css';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';

import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Call on firebase to get my products and create functions to remove and updatestock. Using router to go from homepage to Cart 

const url = 'https://slutproject-produkt-advjs-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export default function App() {

    const [products, setProducts] = useState();
    const [amount, setAmount] = useState();
    const [loadingFinished, setLoadingFinished] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);


    useEffect(() => {
        async function getFireBase() {
            const response = await fetch(url);
            const data = await response.json();

            setAmount(Array(data.length).fill(0));
            setProducts(data);
            setLoadingFinished(true);
            setCartItemsCount(0);

        }
        getFireBase();
    }, [loadingFinished]);



    function updateStock(product, index) {
        if (product.stock > 0) {
            product.stock -= 1;
            amount[index] += 1;
            setAmount([...amount]);

            setCartItemsCount(cartItemsCount + 1)
            if (product.stock == 0) {
                setAmount([...amount]);
            }


        }

    }

    function removeStock(product, index) {
        product.stock += 1;
        amount[index] -= 1;
        setAmount([...amount]);
        setCartItemsCount(cartItemsCount - 1)
    }


    async function checkOut() {

        alert("Thank you for your purchase")
        const options = {
            method: "PUT",
            body: JSON.stringify(products),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }

        await fetch(url, options);

    }


    return (
        <Router>
            <>
                {loadingFinished ? (
                    <>
                        <Header cartItemsCount={cartItemsCount} />
                        <Switch>
                            <Route exact path="/">
                                <main className="block col-2">
                                    <h2>Products</h2>
                                    <div className="row">
                                        <Products
                                            products={products}
                                            updateStock={updateStock}
                                            setAmount={setAmount}
                                            amount={amount}
                                            removeStock={removeStock}
                                        />
                                    </div>
                                </main>
                            </Route>
                            <Route exact path="/cart">
                                <Cart products={products}
                                    updateStock={updateStock}
                                    removeStock={removeStock}
                                    setAmount={setAmount}
                                    amount={amount} checkOut={checkOut} setLoadingFinished={setLoadingFinished} />
                            </Route>
                        </Switch>
                    </>
                ) : (
                    <h1>Loading product information</h1>
                )}
            </>
        </Router>
    );

}



