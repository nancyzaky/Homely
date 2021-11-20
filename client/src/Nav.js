import React, { useState, useRef, useEffect } from "react";
import { navItems } from "./Data";
// import {
//   AiOutlineMenuUnfold,
//   AiFillInstagram,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";

import { TiHeart } from "react-icons/ti";
import { VscCircleFilled } from "react-icons/vsc";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { sideBarItems } from "./Data";
import SubLink from "./SubLink";
import { FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImFacebook2 } from "react-icons/im";

const Nav = ({
  user,
  changeUser,
  setItems,
  count,
  subMenu,
  setSubMenu,
  closeSub,
}) => {
  const handlLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });

    changeUser("");
    setItems([]);
    console.log(count);
  };
  return (
    <>
      <nav className="nav">
        <Link
          to="#"
          style={{
            color: "white",
            marginLeft: "2rem",
            display: "flex",
            justifyContent: "flexStart",
            height: "80px",
            alignItems: "center",
          }}
        >
          {subMenu ? (
            <IoMdCloseCircle
              style={{
                color: "white",
                display: "flex",
                justifyContent: "flexStart",
                height: "80px",
                alignItems: "center",
                fontSize: "30px",
              }}
              onClick={() => {
                setSubMenu(!subMenu);
                console.log("hi");
              }}
            />
          ) : (
            <RiMenuUnfoldFill
              onClick={() => {
                setSubMenu(!subMenu);
                console.log("hi");
              }}
            />
          )}
        </Link>

        {user && (
          <motion.h6 className="user-name" animate={{ x: 600, opacity: 1 }}>
            <span>
              {" "}
              <VscCircleFilled style={{ color: "green" }} />
            </span>
            Welcome {user}
          </motion.h6>
        )}
        <ul style={{ display: "flex" }}>
          <motion.li
            className="header"
            animate={{ x: 930, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "pink" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
            }}
          >
            <FaTwitterSquare style={{ marginTop: "8px" }} />
          </motion.li>
          <motion.li
            className="header"
            animate={{ x: 940, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
              duration: "2",
            }}
          >
            {/* <AiFillInstagram style={{ marginTop: "8px" }} /> */}
          </motion.li>
          <motion.li
            className="header"
            style={{ fontSize: "22px" }}
            animate={{ x: 950, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
              duration: "2",
            }}
          >
            <ImFacebook2 style={{ marginTop: "11px" }} />
          </motion.li>
          <motion.li
            className="header"
            animate={{ x: 960, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
              duration: "2",
            }}
          >
            <Link to="/favorite">
              <TiHeart style={{ marginTop: "8px", color: "white" }} />
            </Link>
          </motion.li>
          <motion.li
            style={{ display: "grid" }}
            className="header"
            animate={{ x: 970, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
              duration: "2",
            }}
          >
            <Link to="/cart">
              <Badge color="secondary" badgeContent={count}>
                {/* <AiOutlineShoppingCart
                  style={{
                    color: "white",
                    marginTop: "8px",
                  }}
                /> */}
              </Badge>
            </Link>
          </motion.li>
        </ul>
      </nav>
      <nav className={subMenu ? "sub-menu active" : "sub-menu"}>
        <div
          style={{
            width: "100%",
            overFlowX: "auto",
            position: "absolute",
          }}
        >
          {sideBarItems.map((item) => {
            return <SubLink item={item} key={item.id} />;
          })}
          <div className="link-icon" onClick={handlLogOut}>
            <Link to="/" className="icon">
              <span style={{ marginLeft: "15px" }}>Log Out</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
