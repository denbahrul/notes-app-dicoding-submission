import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";

function NoteItemBody({ body }) {
  return <div className="note-item__body">{parser(body)}</div>;
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
