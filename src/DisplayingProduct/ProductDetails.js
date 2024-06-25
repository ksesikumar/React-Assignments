import React from "react";

const ProductDetails = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default ProductDetails;