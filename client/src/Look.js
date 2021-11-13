import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopLook } from "./Data";
const Look = () => {
  const { id } = useParams();
  const [look, setLook] = useState({});
  useEffect(() => {
    console.log(id);
    let looks = shopLook.find((item) => {
      return item.id === parseInt(id);
    });
    console.log(looks, shopLook);
    setLook(looks);
  }, []);
  return (
    <div style={{ display: "fixed" }}>
      {
        <img
          style={{ height: "650px", width: "100%" }}
          src={look.url}
          onClick={(e) => {
            console.log(e.clientX, e.clientY);
          }}
        ></img>
      }
      <div
        style={{
          position: "absolute",
          top: "350px",
          left: "150px",
          backgroundColor: "white",
          height: "4rem",
          width: "20rem",
          borderRadius: "0.3rem",
        }}
      ></div>
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
      ></div>
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
      ></div>
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
      ></div>
      <div
        className="arrow-down"
        style={{ top: "444px", left: "1200px" }}
      ></div>
    </div>
  );
};

export default Look;
