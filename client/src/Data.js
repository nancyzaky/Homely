import React from "react";
import {
  GiOfficeChair,
  GiKitchenKnives,
  GiTable,
  GiFlowerPot,
  GiBedLamp,
  GiSofa,
  GiRockingChair,
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
        url: "/item/sofa",
        text: "Sofas",
        icon: <GiSofa className="icon-small" />,
      },
      {
        id: 5,
        url: "/item/chair",
        text: "Chairs",
        icon: <GiRockingChair className="icon-small" />,
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
    items: [
      {
        id: 6,
        productId: 9,
        top: "360px",
        left: "830px",
        point: "arrow-down",
        arrowTop: "423px",
        arrowLeft: "900px",
        image:
          "https://cdn-images.article.com/products/SKU497A/2890x1500/image70472.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 2599,
      },
      {
        id: 7,
        productId: 10,
        top: "690px",
        left: "630px",
        point: "arrow-up",
        arrowTop: "680px",
        arrowLeft: "770px",
        image:
          "https://cdn-images.article.com/products/SKU376/2890x1500/image58158.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 799,
      },
      {
        id: 8,
        productId: 11,
        top: "570px",
        left: "40px",
        point: "arrow-right",
        arrowTop: "590px",
        arrowLeft: "360px",
        image:
          "https://cdn-images.article.com/products/SKU13276/2890x1500/image49102.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 349,
      },
      {
        id: 9,
        productId: 12,
        top: "400px",
        left: "340px",
        point: "arrow-down",
        arrowTop: "462px",
        arrowLeft: "550px",
        image:
          "https://cdn-images.article.com/products/SKU13619/2890x1500/image50594.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 299,
      },
    ],
  },
  {
    id: 2,
    url: "https://cdn-media-lib.article.com/mediaLibrary/f2b55270-dfff-4728-94f0-aed0857bc778.jpg?h=0.5&q=40",
    items: [
      {
        id: 1,
        productId: 4,
        top: "350px",
        left: "550px",
        point: "arrow-down",
        arrowTop: "414px",
        arrowLeft: "700px",
        image:
          "https://cdn-images.article.com/products/SKU14223/2890x1500/image53749.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 749,
      },
      {
        id: 2,
        productId: 6,
        top: "350px",
        left: "150px",
        point: "arrow-down",
        arrowTop: "414px",
        arrowLleft: "200px",
        image:
          "https://cdn-images.article.com/products/SKU13941/2890x1500/image54663.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 549,
      },
      {
        id: 3,
        productId: 5,
        top: "380px",
        left: "950px",
        point: "arrow-down",
        arrowTop: "444px",
        arrowLeft: "1200px",
        image:
          "https://cdn-images.article.com/products/SKU14562/2890x1500/image58113.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 1999,
      },
      {
        id: 4,
        productId: 7,
        top: "600px",
        left: "20px",
        point: "arrow-right",
        arrowTop: "620px",
        arrowLeft: "340px",
        image:
          "https://cdn-images.article.com/products/SKU13491/2890x1500/image51229.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 169,
      },
      {
        id: 5,
        productId: 8,
        top: "660px",
        left: "950px",
        point: "arrow-right",
        arrowTop: "680px",
        arrowLeft: "1270px",
        image:
          "https://cdn-images.article.com/products/SKU13621/2890x1500/image50662.jpg?fit=max&w=2740&q=60&fm=webp",
        price: 199,
      },
    ],
  },
  {
    id: 3,
    url: "https://cdn-media-lib.article.com/mediaLibrary/5822c4c1-77ec-4f70-8543-cd1d94efaf1d.jpg?h=0.5&q=40",
  },
  {
    id: 4,
    url: "https://cdn-media-lib.article.com/mediaLibrary/33de4ae9-4ca4-42c6-aabf-8934f2ddabbc.jpg?h=0.5&q=40",
  },
];
