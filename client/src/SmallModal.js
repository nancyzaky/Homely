import React from "react";

const SmallModal = ({ errorMessage }) => {
  return (
    <aside className="modal-small">
      <h5 style={{ marginTop: "40%", zIndex: "9999" }}>{errorMessage}</h5>
    </aside>
  );
};

export default SmallModal;
