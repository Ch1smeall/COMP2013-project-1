import React, { useState } from "react"
import products from "../data/products.js"
import NavBar from "./NavBar"
import ProductsContainer from "./ProductsContainer"
import CartCard from "./CartCard"

function GroceriesAppContainer() {
    const [cart, setCart] = useState([])

    // add
    function addToCart(name, price, image) {
        let found = false
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                cart[i].quantity += 1
                found = true
            }
        }
        if (!found) {
            cart.push({ name, price, image, quantity: 1 })
        }
        setCart([...cart])
    }

    // remove
    function removeFromCart(name) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                cart[i].quantity -= 1
                if (cart[i].quantity === 0) {
                    cart.splice(i, 1)
                }
                break
            }
        }
        setCart([...cart])
    }

    // totals
    let totalItems = 0
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity
        const priceNumber = parseFloat(cart[i].price.replace("$", ""))
        totalPrice += priceNumber * cart[i].quantity
    }
    totalPrice = totalPrice.toFixed(2)

    // render cart cards
    const cartCards = []
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]
        cartCards.push(
            <CartCard
                key={i}
                name={item.name}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        )
    }

    return (
        <div>
            <NavBar cartCount={totalItems} username="username" />
            <div className="GroceriesApp-Container">
                <div className="ProductsContainer">
                    <ProductsContainer
                        products={products}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                </div>

                <div className="CartContainer">
                    <h2>Cart Items</h2>
                    {cart.length === 0 ? <p>Your cart is empty</p> : cartCards}
                    {cart.length > 0 && (
                        <div className="CartListBtns">
                            <p>Total Price: ${totalPrice}</p>
                            <button onClick={() => setCart([])} className="RemoveButton">Empty Cart</button>
                            <button id="BuyButton">Buy</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GroceriesAppContainer
