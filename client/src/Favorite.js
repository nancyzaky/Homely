import React, { useState, useEffect } from "react";
import FavItem from "./FavItem";
import { motion } from "framer-motion";
import { ImHeart } from "react-icons/im";
import { Link } from "react-router-dom";
const Favorite = ({ changeCount, items, setItems }) => {
  const [favs, setFavs] = useState([]);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(0);
  const changeFav = (num) => {
    let newArr = favs.filter((fav) => {
      return parseInt(fav.id) !== parseInt(num);
    });
    setFavs(newArr);
  };
  useEffect(() => {
    fetch(`/api/me`)
      .then((resp) => resp.json())
      .then((d) => {
        if (d) {
          setUser(d.id);
          fetch(`/api/users/${d.id}/favorites`)
            .then((resp) => resp.json())
            .then((d) => setFavs(d));
        } else {
          setError(true);
        }
      });
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="fav-top">
        <div className="fav-left">
          <motion.h3
            style={{ color: "white", top: "50%", textAlign: "center" }}
            variants={{
              hidden: {
                opacity: 0,
                y: -200,
              },
              visible: {
                opacity: 1,
                y: 0,

                transition: {
                  type: "spring",
                  stifness: "0.5",
                  duration: "0.5",
                  delay: 1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            YOUR FAVORITES
          </motion.h3>
          <motion.h4
            style={{ paddingTop: "5rem" }}
            variants={{
              hidden: {
                opacity: 0,
                x: -200,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stifness: "0.5",
                  duration: "1",
                  delay: 2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            All your top picks, together at last
          </motion.h4>
        </div>
        <div className="fav-right container-shop">
          <img
            src="https://cdn-cms-assets.article.com/7ujRkAB5QKWYVHeE3VTLLw-21d9b5058ea1ab148c5011909211cf29?w=2600&q=60&fm=webp"
            style={{ width: "420px", height: "634px" }}
            alt="pic"
          />
          <div className={`overlay overlayLeft`}>
            <div className="text">
              <Link to={`/look/1`}>
                <button
                  className="btn"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    height: "4rem",
                  }}
                >
                  {" "}
                  SHOP THE LOOK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div style={{ width: "100%", height: "100%" }}>
        {error && <h4>Please Log In to View Your Favorites</h4>}
        {!error && (
          <ul className="fav-list">
            {favs.map((fav) => {
              return (
                <FavItem
                  fav={fav}
                  key={fav.id}
                  changeFav={changeFav}
                  changeCount={changeCount}
                  user={user}
                  setItems={setItems}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorite;
