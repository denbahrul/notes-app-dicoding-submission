import React from "react";
import { Link } from "react-router-dom";
import { BsPen } from "react-icons/bs";

function AddButton() {
  return (
    <div className="homepage__action">
      <Link to="/notes/new" className="action">
        <BsPen />
      </Link>
    </div>
  );
}

export default AddButton;
