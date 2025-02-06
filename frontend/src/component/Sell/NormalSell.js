import React, { useState } from 'react';
import './NormalSell.css';

const NormalSell = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        Stock: '',
        image: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div className="normalSellPageContainer">
            <h1 className="pageTitle">Normal Sell Your Product</h1>
            <p className="pageDescription">
                Enter the details of the product you want to sell individually.
            </p>

            <div className="productForm">
                <label>Product Name:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                />
                <label>Product Description:</label>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                    required
                />
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                />
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                    required
                />
                <label>Stock:</label>
                <input
                    type="number"
                    name="Stock"
                    value={product.Stock}
                    onChange={handleInputChange}
                    required
                />
                <label>Product Image URL:</label>
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleInputChange}
                />
            </div>

            <button className="submitButton">Submit Product for Normal Sell</button>
        </div>
    );
};

export default NormalSell;
