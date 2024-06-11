import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import parser from "html-react-parser";

function NoteDetail({ id, title, createdAt, body, onDelete, onArchive, onUnarchive, isArchived }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
      <div className="detail-page__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} onUnarchive={onUnarchive} isArchived={isArchived} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteDetail;
