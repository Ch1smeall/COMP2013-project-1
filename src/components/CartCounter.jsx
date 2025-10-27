import React from "react";

function CartCounter(props) {
    return (
        <div className="CartCard">
            <h2>Total Items in Cart: {props.totalItems}</h2>
        </div>
    )
}

export default CartCounter;