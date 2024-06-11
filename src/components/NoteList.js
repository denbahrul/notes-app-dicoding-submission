import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return notes.length !== 0 ? (
    <div className="notes-list">
      {notes.map((notes) => (
        <NoteItem key={notes.id} id={notes.id} {...notes} />
      ))}
    </div>
  ) : (
    <div className="notes-list-empty">
      <p className="">Tidak ada catatan</p>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
