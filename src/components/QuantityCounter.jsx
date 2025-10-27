import React from "react";

function QuantityCounter(props) {
    
    let minQuantity = props.type === "cart" ? 1 : 0;

    function increase() {
        props.setQuantity(props.quantity + 1);
        if (props.type === "cart") { 
            props.addToCart(props.name, props.price); 
        }
    }

    function decrease() {
        if (props.quantity > minQuantity) {
            props.setQuantity(props.quantity - 1);
            if (props.type === "cart") { 
                props.removeFromCart(props.name, props.price); 
            }
        }
    }

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center" 
            }}>
            <button onClick={decrease}>-</button>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>{props.quantity}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityCounter;
