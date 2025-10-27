import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0); // start at 0

    function handleAddToCart() {
    if (quantity < 1) {
        alert("Please select a quantity before adding to cart");
        return;
    }
    for (let i = 0; i < quantity; i++) {
        props.addToCart(props.name, props.price, props.image); //pass image
    }
    setQuantity(0); // reset counter 
}


    return (
    <div className="ProductCard">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>Price: {props.price}</p>

        <QuantityCounter
            quantity={quantity}
            setQuantity={setQuantity}
            type="product"
        />

        <button onClick={handleAddToCart} style={{ marginTop: "5px" }}>
            Add to Cart
        </button>
        </div>

    );
}

export default ProductCard;
