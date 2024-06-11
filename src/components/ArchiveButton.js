import React from "react";
import PropTypes from "prop-types";
import { BiArchiveOut, BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ArchiveButton({ id, onArchive, onUnarchive, isArchived }) {
  const navigate = useNavigate();

  return isArchived ? (
    <button
      className="action"
      onClick={() => {
        onUnarchive(id);
        navigate("/");
      }}
    >
      <BiArchiveOut />
    </button>
  ) : (
    <button
      className="action"
      onClick={() => {
        onArchive(id);
        navigate("/");
      }}
    >
      <BiArchiveIn />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
