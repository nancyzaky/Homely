import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImHeart, ImCart } from "react-icons/im";
import { motion } from "framer-motion";
import SubCart from "./SubCart";
import SmallModal from "./SmallModal";
import Loading from "./Loading";

const Sofa = ({ userId, changeCount, changeSuccess, setItems, items }) => {
  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCart = () => {
    setModal(!modal);
  };
  const addToCart = () => {
    fetch(`/carts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        product_id: id,
        quantity: quantity,
      }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        if (d.errors) {
          setError(true);
          setErrorMessage("Please Log In First");
        } else if (d.error) {
          setError(true);
          setErrorMessage("Item Already Added To Cart");
        } else {
          setSuccess(true);
        }
      });
  };
  const handleFav = () => {
    setLiked(true);
    fetch(`/users/${userId}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, product_id: id }),
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));
  };

  const fetchUrl = () => {
    setLoading(true);
    fetch(`/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setImage(data.pictures[0].url);
        setProduct(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id > 0) {
          d.favorites.forEach((item) => {
            if (item.product_id === parseInt(id)) {
              setLiked(true);
            }
          });
        }
      });
  }, []);
  const handleSelectPic = (link) => {
    setImage(link);
  };
  const changeQuantity = (num) => {
    setQuantity(num);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading && <Loading />}

      {success && (
        <SubCart
          addToCart={addToCart}
          success={success}
          modal={modal}
          changeQuantity
          handleCart={handleCart}
          userId={userId}
          setItems={setItems}
          items={items}
          // changeCount={changeCount}
        />
      )}

      <div className="top-section">
        <h2 style={{ color: "grey", paddingLeft: "1rem", paddingTop: "1rem" }}>
          {product.name}
        </h2>
        <div
          style={{
            height: "110%",
            display: "grid",
            justifyContent: "end",
            marginLeft: "56rem",
          }}
        >
          <ul style={{ display: "grid" }}></ul>
          <h5>${product.price * quantity}</h5>
          <section className="heart">
            <button
              className="btn"
              style={{ color: "white", marginTop: "1rem" }}
              onClick={() => {
                addToCart();
                handleCart();
              }}
            >
              Add To Cart
            </button>
          </section>
        </div>
      </div>
      <div className="line"></div>
      {error && <SmallModal errorMessage={errorMessage} />}
      <motion.div
        className="heart"
        style={{ fontSize: "35px", float: "right" }}
        whileTap={{ scale: 3 }}
        transition={{ duration: 0.5 }}
      >
        <ImHeart
          className={liked ? "heart-fill" : "heart-void"}
          onClick={handleFav}
        />
      </motion.div>
      <motion.div style={{ height: "90%", width: "90%" }} drag>
        <img src={image} alt="pic" className="pic-big" />{" "}
      </motion.div>
      {/* <div className="line-small"></div> */}
      <ul style={{ display: "flex", marginTop: "-8rem" }}>
        {product.pictures &&
          product.pictures.map((pic) => {
            return (
              <motion.li
                key={pic.id}
                style={{
                  display: "inline",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.2 }}
                animate={{ boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={pic.url}
                  alt=""
                  className="pic-smallest"
                  onClick={() => handleSelectPic(pic.url)}
                />
              </motion.li>
            );
          })}
      </ul>
      <div className="line-wide"></div>
      <ul style={{ height: "100%", display: "flex", paddingTop: "3rem" }}>
        <section
          style={{
            width: "25%",
            paddingLeft: "1rem",
            color: "grey",
            display: "inline",
          }}
        >
          <h3>Description</h3>
          <h5>{product.description}</h5>
        </section>
        <section
          style={{
            width: "25%",
            paddingLeft: "1rem",
            color: "grey",
            display: "inline",
            paddingLeft: "20rem",
          }}
        >
          <h3>Features</h3>
          <ul>
            {product.features &&
              product.features.map((feat) => {
                return <h5>{feat.feat}</h5>;
              })}
          </ul>
        </section>
        {product.specific && (
          <section
            style={{
              width: "30%",
              paddingLeft: "1rem",
              color: "grey",
              display: "inline",
              paddingLeft: "20rem",
            }}
          >
            <h3>Specifications</h3>
            <ul>
              <h5>Style: {product.specific.style}</h5>
              <h5>Height: {product.specific.height}"H</h5>
              <h5>Width: {product.specific.width}"W</h5>
              <h5>Depth: {product.specific.depth}"D</h5>

              <h5>Color: {product.specific.color}</h5>
              <h5>Materials:{product.specific.materials}</h5>
            </ul>
          </section>
        )}
      </ul>
    </div>
  );
};

export default Sofa;
