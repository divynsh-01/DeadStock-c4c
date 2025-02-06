import React from 'react';
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { BsFillMicFill } from "react-icons/bs";
import "./pdt.css";

const Product = ({ product }) => {
    const options = {
        precision: 0.5,
        readOnly: true,
        value: product.ratings,
    };

    const speakProductDetails = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = `Product Name: ${product.name}. Price: ₹${product.price}. Rating: ${product.ratings} stars.`;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    };

    return (
        <div>
            <Link className='productCard' to={`/product/${product._id}`} style={{ padding: '20px', position: 'relative' }}>
                <img src={product.images[0].url} alt={product.name} />

                {/* Bulk Product Label */}
                {product.isBulk && (
                    <span className="bulk-badge">Bulk</span>
                )}

                <p>{product.name}</p>
                <div>
                    <Rating {...options} />
                    <span className='productCardRev'>({product.numOfReviews} Reviews)</span>
                </div>
                <span>{`₹${product.price}`}</span>

                {/* Mic Button to speak product details */}
                <button className="micButton" onClick={speakProductDetails}>
                    <BsFillMicFill size={20} />
                </button>
            </Link>
        </div>
    );
};

export default Product;
