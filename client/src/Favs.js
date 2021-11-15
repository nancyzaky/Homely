import React from "react";
import Card from "./Card";

const Favs = () => {
  const allFav = [
    "https://www.pngarts.com/files/7/Modern-Furniture-Transparent-Background-PNG.png",
    "https://www.pngarts.com/files/7/Chair-Furniture-Transparent-Image.png",
    "https://www.pngarts.com/files/7/Modern-Furniture-PNG-Download-Image.png",
    "https://www.pngarts.com/files/7/Modern-Furniture-Free-PNG-Image.png",
    "https://purepng.com/public/uploads/large/purepng.com-chair-designchairfurnituresofaobjectschair-design-821523987898zjznk.png",
    "https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527998223kj5wy.png",
  ];
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "100%",
          // backgroundColor: "rgb(228, 245, 244)",
          marginBottom: "1rem",
        }}
      >
        <h1> OUR TOP PICKS</h1>
      </div>
      <Card
        item={
          "https://www.pngarts.com/files/7/Modern-Furniture-Transparent-Background-PNG.png"
        }
      />
    </div>
  );
};

export default Favs;
