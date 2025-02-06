import React from "react";
import "./Subscription.css";

// Subscription Component for displaying a list of products
const Subscription = () => {
  return (
    <div className="subscription-card">
      <h3 className="subscription-title">Subscription Status</h3>
      <hr className="subscription-divider" />

      <div className="subscription-details">
        <div className="status-item">
          <h4 className="status-label">Status</h4>
          <h4 className="status-value active">Active</h4>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
