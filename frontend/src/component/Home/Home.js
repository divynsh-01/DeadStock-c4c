import React, { useEffect, useState } from "react";
import "./Home.css"; // Import the CSS file
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import { getProduct, clearErrors } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { toast } from "react-toastify";
import logoHead from "../../images/logoHead2.png";
import VoteCard from "../VoteCard/VoteCard.js";
import Subscription from "../Subscription/Subscription.js";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [votedProducts, setVotedProducts] = useState([]);

  const handleVote = (productId) => {
    setVotedProducts((prevVotes) => [...prevVotes, productId]);
  };

  useEffect(() => {
    // Dispatch the action to fetch products
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, { position: "bottom-center" });
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <>
      {loading ? (
        <Loader /> // Loader while fetching data
      ) : (
        <>
          <section id="logoHead">
            <div className="headlogo">
              <img
                src={logoHead}
                style={{ width: "90%", height: "auto" }}
                alt=""
              />
            </div>
          </section>
          <MetaData title="Dead Stock Marketplace" />
          <div className="mainCont">
            <div className="divCont">
              <h2 className="homeHeading">Featured Products</h2>
              <hr className="horizontal-rule" /> {/* Horizontal Rule */}
              <div className="containere" id="containere">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} /> // Ensure unique key prop
                  ))}
              </div>
            </div>
            <div className="divCont2">
              <Subscription />
              <VoteCard products={products} onVote={handleVote} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
