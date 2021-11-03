import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubLink = ({ item }) => {
  const [pointUp, setPointUp] = useState(false);
  return (
    <>
      <Link
        to={item.url}
        className="icon"
        onClick={() => {
          setPointUp(!pointUp);
        }}
      >
        <div className="link-icon">
          {item.icon}
          <span style={{ marginLeft: "15px" }}>{item.text}</span>
        </div>
        {item.subLinks && <div>{pointUp ? item.arrowUp : item.arrowDown}</div>}
      </Link>
      {pointUp &&
        item.subLinks.map((sub) => {
          return (
            <Link to={sub.url} className="drop-down-link ">
              {sub.icon}
              <span style={{ marginLeft: "15px" }}>{sub.text}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubLink;
