import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemTitle from "./NoteItemTitle";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteItemTitle id={id} title={title} createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
}

NoteItem.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
