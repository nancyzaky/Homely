import React from "react";
import {
  GiOfficeChair,
  GiKitchenKnives,
  GiTable,
  GiFlowerPot,
  GiBedLamp,
  GiSofa,
} from "react-icons/gi";
import { FaUsers, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import { ImCart } from "react-icons/im";

export const navItems = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/",
    title: "Home",
  },
  {
    id: 3,
    url: "#",
    title: "Sign-Up",
  },
  {
    id: 4,
    url: "#",
    title: "Log-In",
  },
  {
    id: 5,
    url: "#",
    title: "Shopping-Cart",
  },
];

export const sideBarItems = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome className="icon-small" />,
  },
  {
    id: 2,
    url: "#",
    text: "Profile",
    icon: <CgProfile className="icon-small" />,
    arrowUp: <IoMdArrowDropup />,
    arrowDown: <IoMdArrowDropdown />,
    subLinks: [
      {
        url: "/signup",
        text: "Sign Up",
        icon: <FaUsers className="icon-small" />,
      },
      {
        url: "/login",
        text: "Log In",
        icon: <BiLogInCircle className="icon-small" />,
      },

      {
        url: "/cart",
        text: "Cart",
        icon: <ImCart className="icon-small" />,
      },
    ],
  },
  {
    id: 3,
    url: "#",
    text: "Dinning Room",
    icon: <GiTable className="icon-small" />,
    arrowUp: <IoMdArrowDropup />,
    arrowDown: <IoMdArrowDropdown />,
    subLinks: [
      {
        url: "/sofa",
        text: "Sofas",
        icon: <GiSofa className="icon-small" />,
      },
    ],
  },
  {
    id: 4,
    url: "/",
    text: "Bedroom",
    icon: <GiBedLamp className="icon-small" />,
  },
  {
    id: 5,
    url: "/",
    text: "Kitchen",
    icon: <GiKitchenKnives className="icon-small" />,
  },
  {
    id: 6,
    url: "/",
    text: "Home Office",
    icon: <GiOfficeChair className="icon-small" />,
  },
  {
    id: 7,
    url: "/",
    text: "Out Door",
    icon: <GiFlowerPot className="icon-small" />,
  },
];
