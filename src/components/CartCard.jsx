import React from "react"
import QuantityCounter from "./QuantityCounter"

function CartCard(props) {
    return (
        <div className="CartCard">
            <img src={props.image} alt={props.name} />
            <div className="CartCardInfo">
                <p>{props.name}</p>
                <p>Price: {props.price}</p>
                <p>Subtotal: ${(parseFloat(props.price.replace("$", "")) * props.quantity).toFixed(2)}</p>
            </div>

            <div className="CartControls">
                <QuantityCounter
                    quantity={props.quantity}
                    setQuantity={(newQty) => {
                        if (newQty > props.quantity) {
                            props.addToCart(props.name, props.price, props.image)
                        } else if (newQty < props.quantity) {
                            props.removeFromCart(props.name)
                        }
                    }}
                    type="cart"
                />
                <button 
                    className="RemoveButton"
                    onClick={() => props.removeFromCart(props.name)}
                >Remove Item</button>
            </div>
        </div>
    )
}

export default CartCard
