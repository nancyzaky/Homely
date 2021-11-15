import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { shopLook } from "./Data";
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
        return (
          <>
            <Link to={`/product/${product.productId}`}>
              <div
                className={active ? "look-item active" : "look-item"}
                key={product.id}
                style={{ top: product.top, left: product.left }}
              >
                <img src={product.image} alt="pic" className="look-pic" />
                <h5 style={{ paddingLeft: "8rem", color: "red" }}>
                  ${product.price}
                </h5>
              </div>
              <div
                className={product.point}
                style={{ top: product.arrowTop, left: product.arrowLeft }}
              ></div>
            </Link>
          </>
        );
      })}
      {/* <div
        style={{
          position: "absolute",
          top: "350px",
          left: "150px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        chair
      </div>
      <div className="arrow-down" style={{ top: "414px", left: "200px" }}></div>
      <div
        style={{
          position: "absolute",
          top: "600px",
          left: "20px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        ottoman
      </div>
      <div
        className="arrow-right"
        style={{ top: "620px", left: "340px" }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "350px",
          left: "550px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        blue
      </div>
      <div className="arrow-down" style={{ top: "414px", left: "700px" }}></div>
      <div
        style={{
          position: "absolute",
          top: "380px",
          left: "950px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        brown
      </div>
      <div
        className="arrow-down"
        style={{ top: "444px", left: "1200px" }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "660px",
          left: "950px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      >
        table
      </div>
      <div
        className="arrow-right"
        style={{ top: "680px", left: "1270px" }}
      ></div> */}
      {/* <div className="look-item" style={{ top: "690px", left: "630px" }}>
        10
      </div>
      <div className="arrow-up" style={{ top: "680px", left: "770px" }}></div>

      <div className="look-item" style={{ top: "360px", left: "830px" }}>
        9
      </div>
      <div className="arrow-down" style={{ top: "423px", left: "900px" }}></div>

      <div className="look-item" style={{ top: "570px", left: "40px" }}>
        11
      </div>
      <div
        className="arrow-right"
        style={{ top: "590px", left: "360px" }}
      ></div>

      <div className="look-item" style={{ top: "400px", left: "340px" }}>
        12
      </div>
      <div className="arrow-down" style={{ top: "462px", left: "550px" }}></div> */}
      <button
        className="btn"
        style={{
          position: "absolute",
          top: "200px",
          left: "45%",
          color: "white",
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
