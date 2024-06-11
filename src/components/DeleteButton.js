import React from "react";
import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();

  return (
    <button
      className="action"
      onClick={() => {
        onDelete(id);
        navigate("/");
      }}
    >
      <BsTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
