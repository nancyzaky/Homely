import React, { useState } from "react";
import Card from "./Card";
const Footer = ({ user }) => {
  const [codeApplied, setCodeApplied] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: "rgb(230, 238, 238)",
        width: "100%",
        height: "600px",
        paddingTop: "5rem",
        display: "flex",
        paddingRight: "2rem",
        paddingLeft: "7rem",
        flexDirection: "wrap",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff, #c8c7c8, #939293, #626061, #353333)",
        // position: "absolute",
      }}
    >
      <Card
        user={user}
        item={"../greenChair.png"}
        text={"Pick One Card"}
        colorTwo={
          "radial-gradient(circle, #ffffff, #e4ebf6, #bddae9, #94cbd0, #78baaa)"
        }
        code={"Final-week-10"}
        codeApplied={codeApplied}
        setCodeApplied={setCodeApplied}
      />
      <Card
        user={user}
        item={"../img2.png"}
        text={"To Reveal"}
        colorOne={""}
        colorTwo={
          "radial-gradient(circle, #ffffff, #d5d5d8, #adadb3, #85878e, #5f636c)"
        }
        code={"Final-week-20"}
        codeApplied={codeApplied}
        setCodeApplied={setCodeApplied}
      />

      <Card
        user={user}
        item={"../img.png"}
        text={"Discount Code"}
        colorTwo={
          "radial-gradient(circle, #ffffff, #e0e0e9, #c0c1d3, #9ea4be, #7b89aa)"
        }
        code={"Final-week-5"}
        codeApplied={codeApplied}
        setCodeApplied={setCodeApplied}
      />
    </footer>
  );
};
export default Footer;
