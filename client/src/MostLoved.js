import React, { useEffect, useState } from "react";
import SofaItem from "./SofaItem";
const MostLoved = () => {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch(`/bestsellers`)
      .then((resp) => resp.json())
      .then((d) => setBestSellers(d));
  }, []);
  return (
    <div className="line-wide">
      <div style={{ width: "100%", height: "100%" }}>
        {bestSellers.length > 0 &&
          bestSellers.map((item) => {
            return <SofaItem key={item.id} sofa={item} />;
          })}
      </div>
    </div>
  );
};

export default MostLoved;
