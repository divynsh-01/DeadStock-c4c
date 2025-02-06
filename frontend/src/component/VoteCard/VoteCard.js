import React, { useState } from 'react';
import './VoteCard.css';

const VoteCard = ({ products, onVote }) => {
  const [votedProductIds, setVotedProductIds] = useState([]);

  const handleVote = (productId) => {
    if (votedProductIds.includes(productId)) {
      alert('You have already voted for this product!');
    } else {
      onVote(productId); 
      setVotedProductIds([...votedProductIds, productId]);
    }
  };

  return (
    <div className="vote-card">
      <h3 className="vote-card-title">Vote for Your Favorite Products</h3>
      <hr className="horizontal-rule" /> 
      <div className="vote-card-content">
        {products && products.length > 0 ? (
          products.slice(0, 4).map((product) => (
            <div key={product._id} className="product-item">
              <div className="product-image-container">
                <img src= {product.images[0].url} alt= {product.name} className="product-image" />
              </div>
              <h4 className="product-name">{product.name}</h4>
              <p className="product-description">{product.description}</p>
              <button
                onClick={() => handleVote(product._id)}
                className="vote-button"
                disabled={votedProductIds.includes(product._id)}
              >
                {votedProductIds.includes(product._id) ? 'Voted' : 'Vote'}
              </button>
            </div>
          ))
        ) : (
          <p>No products available to vote on.</p>
        )}
      </div>
    </div>
  );
};

export default VoteCard;
