import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Success = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/shops/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ active: false }),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));
  }, []);
  return (
    <>
      <h1>Thank you for shopping with us today</h1>
      <a href="/"> Click to go to main menu</a>
    </>
  );
};

export default Success;
