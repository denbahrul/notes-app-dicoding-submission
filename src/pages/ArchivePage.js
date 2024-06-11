import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      initializing: true,
    };
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
        initializing: false,
      };
    });
  }

  render() {
    const initializing = this.state.initializing;
    if (initializing) {
      return <p>Loading</p>;
    }
    return (
      <section>
        <h2>Arsip</h2>
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default ArchivePage;
