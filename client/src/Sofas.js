import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Loading from "./Loading";
import SofaItem from "./SofaItem";
const Sofas = () => {
  const { cat } = useParams();
  const [sofas, setAllSofas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);
  const fetchUrl = () => {
    setLoading(true);
    fetch(`/api/product/${cat}`)
      .then((resp) => resp.json())
      .then((d) => {
        if (d) {
          setAllSofas(d);
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [cat]);

  return (
    <>
      {loading && <Loading />}
      <section className="intro-top"></section>
      <section className="sofa-intro"></section>
      <section className="filter">
        <p
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "6rem",
            paddingTop: "0.2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Sort by{" "}
          <IoIosArrowDown
            onClick={() => {
              setFilter(!filter);
            }}
            style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}
          />
        </p>
        <motion.aside
          className={filter ? "filter-select active-select" : "filter-select"}
        >
          <ul
            style={{
              width: "100%",
              paddingTop: "1rem",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
            onClick={(e) => {
              fetch(`/api/product/${cat}/${e.target.innerText}`)
                .then((resp) => resp.json())
                .then((d) => {
                  setAllSofas(d);
                  setFilter(!filter);
                });
            }}
          >
            <li className="filter-list">Price_Low</li>
            <li className="filter-list">Price_High</li>
            <li className="filter-list">Below $1000</li>
            <li className="filter-list">Below $500</li>
          </ul>
        </motion.aside>
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
          {sofas.length > 0 &&
            sofas.map((sofa) => {
              return <SofaItem key={sofa.id} sofa={sofa} />;
            })}
        </ul>
      )}
      {sofas.length === 0 && <h3>No Products found</h3>}
    </>
  );
};

export default Sofas;
