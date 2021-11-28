import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SubLink = ({ item, setSubMenu, subMenu }) => {
  const [pointUp, setPointUp] = useState(false);

  return (
    <>
      <Link
        to={item.url}
        className={item.subLinks ? "icon-menu icon" : "icon"}
        onClick={() => {
          if (item.subLinks) {
            setPointUp(!pointUp);
          } else {
            setSubMenu(false);
          }
        }}
      >
        <div className={item.subLinks ? "link-icon icon-menu" : "link-icon"}>
          {item.icon}
          <span style={{ marginLeft: "15px" }}>{item.text}</span>
        </div>
        {item.subLinks && <div>{pointUp ? item.arrowUp : item.arrowDown}</div>}
      </Link>
      {pointUp &&
        item.subLinks.map((sub) => {
          return (
            <Link
              to={sub.url}
              className="drop-down-link "
              key={sub.id}
              onClick={() => {
                setSubMenu(false);
              }}
            >
              {sub.icon}
              <span style={{ marginLeft: "15px" }}>{sub.text}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubLink;
