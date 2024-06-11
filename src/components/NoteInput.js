import React from "react";
import PropTypes from "prop-types";
import { BsCheckLg } from "react-icons/bs";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limitChar: 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const maxChar = 50;
    const titleInput = event.target.value.slice(0, maxChar);
    const titleInputLength = titleInput.length;

    this.setState(() => {
        return {
            title: titleInput,
            limitChar: maxChar - titleInputLength,
        };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <div className="add-new-page__input">
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.limitChar}</p>
          <input className="add-new-page__input__title" type="text" placeholder="Judul catatan . . ." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="add-new-page__input__body" type="text" placeholder="Isi catatan . . ." contentEditable value={this.state.body} onInput={this.onBodyChangeEventHandler} />
        </div>
        <div className="add-new-page__action">
          <button className="action" type="submit" title="simpan">
            <BsCheckLg />
          </button>
        </div>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
