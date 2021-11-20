import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { shopLook } from "./Data";
import LookItem from "./LookItem";
const Look = () => {
  const { id } = useParams();
  const [look, setLook] = useState([]);
  const [img, setImg] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(id);
    let looks = shopLook.find((item) => {
      return parseInt(item.id) === parseInt(id);
    });
    console.log(looks);
    setLook(looks.items);
    setImg(looks.url);
    console.log(look);
  }, []);
  return (
    <div style={{ display: "fixed" }}>
      <img
        style={{ height: "650px", width: "100%" }}
        src={img}
        onClick={(e) => {
          console.log(e.clientX, e.clientY);
        }}
      ></img>
      {look.map((product) => {
        return <LookItem product={product} key={product.id} active={active} />;
      })}

      <button
        className="btn"
        style={{
          position: "absolute",
          top: "200px",
          left: "45%",
          color: "white",
          height: "3rem",
        }}
        onClick={() => {
          setActive(!active);
        }}
      >
        View Products
      </button>
    </div>
  );
};

export default Look;
