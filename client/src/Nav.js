import React, { useState, useRef, useEffect } from "react";
import { navItems } from "./Data";
import { AiOutlineMenuUnfold, AiFillInstagram } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { sideBarItems } from "./Data";
import SubLink from "./SubLink";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [subMenu, setSubMenu] = useState(false);
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
          <RiMenuUnfoldFill
            onClick={() => {
              setSubMenu(!subMenu);
            }}
          />
        </Link>
        <ul style={{ display: "flex" }}>
          <motion.li
            className="header"
            animate={{ x: 1100, opacity: 1 }}
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
            animate={{ x: 1110, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 80,
              duration: "2s",
            }}
          >
            <AiFillInstagram style={{ marginTop: "8px" }} />
          </motion.li>
        </ul>
      </nav>

      <nav className={subMenu ? "sub-menu active" : "sub-menu"}>
        <div style={{ width: "100%" }}>
          <Link
            to="#"
            style={{
              color: "white",
              marginLeft: "2rem",
              display: "flex",
              justifyContent: "flexStart",
              height: "80px",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            <IoMdCloseCircle
              style={{
                color: "white",
                marginLeft: "rem",
                display: "flex",
                justifyContent: "flexStart",
                height: "80px",
                alignItems: "center",
                fontSize: "30px",
              }}
              onClick={() => {
                setSubMenu(!subMenu);
              }}
            />
          </Link>
          {sideBarItems.map((item) => {
            return <SubLink item={item} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
