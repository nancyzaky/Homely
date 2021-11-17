import React, { useEffect, useState } from "react";
import SofaItem from "./SofaItem";
import { AnimateSharedLayout, motion } from "framer-motion";
import { RiPlayCircleFill } from "react-icons/ri";
const MostLoved = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [details, setDetails] = useState(true);
  const greenChair = [{ id: 1, img: "../greenChair.png" }];
  useEffect(() => {
    fetch(`/bestsellers`)
      .then((resp) => resp.json())
      .then((d) => setBestSellers(d));
  }, []);
  return (
    <>
      <div className="line-wide"> </div>
      <div className="most-loved-cont">
        <div
          style={{
            width: "100%",
            display: "flex",
            position: "fixed",
            padding: "20px",
            justifyContent: "spaceBetween",
          }}
        ></div>
        {/* {bestSellers.length > 0 &&
          bestSellers.map((item) => {
            return <SofaItem key={item.id} sofa={item} />;
          })} */}
        <AnimateSharedLayout>
          {details ? (
            <GreenChair
              details={details}
              setDetails={setDetails}
              greenChair={greenChair}
            />
          ) : (
            <Text
              details={details}
              setDetails={setDetails}
              greenChair={greenChair}
            />
          )}
        </AnimateSharedLayout>
      </div>
    </>
  );
};

export default MostLoved;

export const Text = () => {
  return <div></div>;
};

export const GreenChair = ({ details, setDetails, greenChair }) => {
  const transImg = { duration: 1 };
  const transTextVariants = {
    show: {
      opacity: [0, 1],
      scale: [0.75, 1],
    },
    hide: {
      opacity: [1, 0],
      transition: {
        duration: 0.125,
      },
    },
  };
  return (
    <div className="less-details">
      <div className="img-details">
        <motion.img
          src={greenChair[0].img}
          transition={transImg}
          style={{ height: "auto", width: "40%" }}
        />
        <div className="text">
          <motion.p
            variants={transTextVariants}
            className="name"
            animate="show"
            exit="hide"
          >
            OUR BEST SELLERS
          </motion.p>
          <motion.p
            variants={transTextVariants}
            className="details"
            animate="show"
            exit="hide"
          >
            <RiPlayCircleFill
              onClick={() => {
                setDetails(false);
              }}
            />
          </motion.p>
        </div>
      </div>
    </div>
  );
};
