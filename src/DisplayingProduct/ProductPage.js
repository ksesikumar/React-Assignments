import React from "react";
import ProductDetails from "./ProductDetails";


const ProductPage = () => {
    const product = {
        name: "LG AC ",
        price: "Rs 45,999",
        description: "Bank Offers Up To 30% And This Is Very Cool Gadget With 1.5 Tons AC And 10 Years Warranty With Compressor"
    };
    return (
        <div>
            <h1>Product Page</h1>
            <ProductDetails
                name={product.name}
                price={product.price}
                description={product.description}
            />
        </div>
    );
}
export default ProductPage;