import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
const Sofas = () => {
  const [sofas, setAllSofas] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchUrl = () => {
    setLoading(true);
    fetch(`/products`)
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setAllSofas(d);
        setLoading(false);
      });
  };
  const handleHover = (key) => {};
  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <section className="intro-top"></section>
      <section className="sofa-intro"></section>
      <section className="filter">
        <p
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "6rem",
            paddingTop: "1rem",
          }}
        >
          Sort by{" "}
          <IoIosArrowDown
            style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}
          />
        </p>
      </section>
      {!loading && (
        <ul
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {sofas.map((sofa) => {
            return (
              <motion.li
                key={sofa.id}
                className="product"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stifness: 80,
                }}
              >
                <Link to={`/sofa/${sofa.id}`}>
                  <img
                    src={sofa.pictures[index].url}
                    className="pic-small"
                    // onMouseEnter={() => {
                    //   setIndex((index) => {
                    //     return Math.floor(Math.random() * (4 - 3 + 1) + 4);
                    //   });
                    // }}
                    // onMouseLeave={() => {
                    //   setIndex((index) => {
                    //     return 0;
                    //   });
                    // }}
                  />
                  <section
                    style={{ justifyContent: "center", textAlign: "center" }}
                  >
                    <h5 style={{ color: "gray", letterSpacing: "2px" }}>
                      {sofa.name}
                    </h5>
                    <h5 className="item-desc-header">${sofa.price}</h5>
                  </section>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sofas;
