import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import AddButton from "../components/AddButton";
import PropTypes from "prop-types";
import SearchBar from "../components/NoteSearch";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      initializing: true,
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => {
      return {
        notes: data,
        initializing: false,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const initializing = this.state.initializing;
    const notes = this.state.notes.filter((notes) => {
      return notes.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });
    if (initializing) {
      return <p>Loading</p>;
    }

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={notes} />
        <AddButton />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
