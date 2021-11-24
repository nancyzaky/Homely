import React, { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    fetch("/api/me")
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id && d.id > 0) {
          fetch(`/api/shops/${d.id}`)
            .then((resp) => resp.json())
            .then((d) => console.log(d));
        }
      });
  }, []);
  return <div style={{ overFlow: "hidden" }}></div>;
};

export default Orders;
