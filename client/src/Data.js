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
        id: 1,
        url: "/signup",
        text: "Sign Up",
        icon: <FaUsers className="icon-small" />,
      },
      {
        id: 2,
        url: "/login",
        text: "Log In",
        icon: <BiLogInCircle className="icon-small" />,
      },

      {
        id: 3,
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
        id: 4,
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

export const shopLook = [
  {
    id: 1,
    url: "https://cdn-media-lib.article.com/mediaLibrary/49155175-4674-410d-a747-62c01ad95870.jpg?h=0.5&q=40",
  },
  {
    id: 2,
    url: "https://cdn-media-lib.article.com/mediaLibrary/f2b55270-dfff-4728-94f0-aed0857bc778.jpg?h=0.5&q=40",
  },
  {
    id: 3,
    url: "https://cdn-media-lib.article.com/mediaLibrary/5822c4c1-77ec-4f70-8543-cd1d94efaf1d.jpg?h=0.5&q=40",
  },
];
