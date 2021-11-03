import React from "react";
import {
  GiRunningShoe,
  GiOfficeChair,
  GiKitchenKnives,
  GiTable,
  GiFlowerPot,
} from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { GiBedLamp } from "react-icons/gi";

export const navItems = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "#",
    title: "Sign-Up",
  },
  {
    id: 3,
    url: "#",
    title: "Log-In",
  },
  {
    id: 4,
    url: "#",
    title: "Shopping-Cart",
  },
];

export const sideBarItems = [
  {
    id: 1,
    url: "/",
    text: "profile",
    icon: <CgProfile className="icon-small" />,
    arrowUp: <IoMdArrowDropup />,
    arrowDown: <IoMdArrowDropdown />,
    subLinks: [
      {
        url: "/",
        text: "Sign Up",
        icon: <CgProfile className="icon-small" />,
      },
      {
        url: "/",
        text: "Log In",
        icon: <GiRunningShoe className="icon-small" />,
      },
    ],
  },
  {
    id: 2,
    url: "/",
    text: "Dinning Room",
    icon: <GiTable className="icon-small" />,
  },
  {
    id: 3,
    url: "/",
    text: "Bedroom",
    icon: <GiBedLamp className="icon-small" />,
  },
  {
    id: 4,
    url: "/",
    text: "Kitchen",
    icon: <GiKitchenKnives className="icon-small" />,
  },
  {
    id: 5,
    url: "/",
    text: "Home Office",
    icon: <GiOfficeChair className="icon-small" />,
  },
  {
    id: 6,
    url: "/",
    text: "Out Door",
    icon: <GiFlowerPot className="icon-small" />,
  },
];
