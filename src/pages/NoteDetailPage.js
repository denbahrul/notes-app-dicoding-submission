import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import NotFoundPage from "./NotFoundPage";

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setInitializing(false);
    });
  }, [id]);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate("/archive")
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate("/archive");
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    navigate("/");
  }

  if (initializing) {
    return <p>Loading</p>;
  }

  if (note === null) {
    return (
      <div>
        <NotFoundPage />;
      </div>
    );
  }

  return (
    <div>
      <NoteDetail {...note} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} isArchived={note.archived} />
    </div>
  );
}

export default NoteDetailPage;
