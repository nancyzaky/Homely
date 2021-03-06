import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiFillInstagram, AiOutlineShoppingCart } from "react-icons/ai";
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
  const history = useHistory();
  const handlLogOut = () => {
    fetch("/api/logout", {
      method: "DELETE",
    });
    changeUser("", 0);
    setItems([]);
    console.log(count);
    setSubMenu(!subMenu);
    history.push("/");
  };
  return (
    <div>
      <nav className="nav">
        <section
          style={{
            display: "flex",
            width: "40%",
          }}
        >
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
                }}
              />
            ) : (
              <RiMenuUnfoldFill
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flexStart",
                  height: "80px",
                  alignItems: "center",
                  fontSize: "25px",
                }}
                className="icon-menu"
                onClick={() => {
                  console.log(subMenu);
                  setSubMenu(!subMenu);
                  console.log(subMenu);
                }}
              />
            )}
          </Link>

          {user && (
            <>
              <motion.h6
                className="user-name"
                animate={{ y: 1, x: 8, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stifness: 1,
                  duration: "1",
                }}
              >
                <span>
                  {" "}
                  <VscCircleFilled style={{ color: "green" }} />
                </span>
                Welcome {user}
              </motion.h6>
            </>
          )}
        </section>
        <ul
          style={{
            display: "flex",
            width: "60%",
            float: "right",
            justifyContent: "end",
            marginRight: "2rem",
          }}
        >
          <motion.li
            className="header"
            animate={{ y: "0", opacity: 1 }}
            whileHover={{ scale: 1.5, color: "pink" }}
            initial={{ opacity: 0.1, y: "-100%" }}
            transition={{
              type: "spring",
              stifness: 280,
              duration: "1",
            }}
          >
            <a href="https://twitter.com/">
              <FaTwitterSquare
                style={{ marginTop: "8px", color: "white" }}
                target="_blank"
              />
            </a>
          </motion.li>
          <motion.li
            className="header"
            animate={{ y: "0", opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1, y: "100%" }}
            transition={{
              type: "spring",
              stifness: 280,
              duration: "2",
            }}
          >
            <a href="https://www.instagram.com/" target="_blank">
              <AiFillInstagram style={{ marginTop: "8px", color: "white" }} />
            </a>
          </motion.li>
          <motion.li
            className="header"
            style={{ fontSize: "22px" }}
            animate={{ y: "0", opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1 }}
            transition={{
              type: "spring",
              stifness: 280,
              duration: "3",
            }}
          >
            <a href="https://www.facebook.com/" target="_blank">
              <ImFacebook2 style={{ marginTop: "11px", color: "white" }} />
            </a>
          </motion.li>
          <motion.li
            className="header"
            animate={{ y: "0", opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1, y: "100%" }}
            transition={{
              type: "spring",
              stifness: 280,
              duration: "4",
            }}
          >
            <Link to="/favorite">
              <TiHeart style={{ marginTop: "8px", color: "white" }} />
            </Link>
          </motion.li>
          <motion.li
            style={{ display: "grid" }}
            className="header"
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.5, color: "lightBlue" }}
            initial={{ opacity: 0.1, y: -100 }}
            transition={{
              type: "spring",
              stifness: 280,
              duration: "5",
            }}
          >
            <Link to="/cart">
              <Badge color="secondary" badgeContent={count}>
                <AiOutlineShoppingCart
                  style={{
                    color: "white",
                    marginTop: "8px",
                  }}
                />
              </Badge>
            </Link>
          </motion.li>
        </ul>
      </nav>
      <div className={subMenu ? "nav-wrapper active-wrapper" : "nav-wrapper "}>
        <nav className={subMenu ? "sub-menu active" : "sub-menu"}>
          <div
            style={{
              width: "100%",
              overFlowY: "scroll",
              position: "absolute",
            }}
          >
            {sideBarItems.map((item) => {
              return (
                <SubLink
                  item={item}
                  key={item.id}
                  subMenu={subMenu}
                  setSubMenu={setSubMenu}
                />
              );
            })}
            <div className="link-icon" onClick={handlLogOut}>
              <li className="icon">
                <span style={{ marginLeft: "15px" }}>Log Out</span>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
