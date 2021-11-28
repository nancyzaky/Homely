import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="sub-section">
        <section
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "30px",
            letterSpacing: "3px",
            paddingTop: "3rem",
          }}
        >
          <h1>Love modern </h1>
          <h1>furniture? Us too</h1>
        </section>
        <section
          style={{
            paddingLeft: "8rem",
            paddingTop: "4rem",
            letterSpacing: "3px",
            width: "70%",
          }}
        >
          <p>The dining room is a place where family can come together.</p>
          <p>
            {" "}
            From mid-century modern to contemporary, and everything in between,
          </p>
          <p>
            these pieces are designed with purpose so that functionality and
            quality reign supreme.{" "}
          </p>
          <p>
            Available in a range of sizes to fit in the smallest of apartments
            or the largest of homes.
          </p>
        </section>
      </section>
      <div style={{ width: "100%", height: "100%" }}>
        <div className="sub-cont">
          <section className="sub-img"></section>
          <section
            style={{
              paddingTop: "3rem",
            }}
          >
            <h2>GET NEW PRODUCTS AND PROMOTIONS IN YOUR INBOX</h2>
            <h3 style={{ color: "grey" }}>Keep up with what we are up to.</h3>
            <input
              placeholder="Enter your email address"
              style={{
                height: "3rem",
                // width: "18rem",
                width: "80%",
                border: "none",
                boxShadow: " 5px 10px 18px #8cbbd4",
                padding: "10px",
                borderRadius: "0.4rem",
                // textAlign: "center",
              }}
            ></input>
            <button className="btn" style={{ marginTop: "3rem" }}>
              Subscribe
            </button>
            <h3 style={{ color: "grey", paddingTop: "1rem" }}>
              Unsubscribe any time
            </h3>
          </section>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
