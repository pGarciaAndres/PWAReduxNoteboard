import React from 'react';
import Navigator from './components/Navigator/Navigator.jsx';
import CreateNote from './components/CreateNote.jsx';
import Notes from './components/Notes.jsx';
import styled from 'styled-components';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addNoteAction, updateNotesAction } from './store/actions';

const AppContainer = styled.div`
  text-align: center;
`
const Dashboard = styled.div`
  float: left;
  width: 100%;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`

const App = () => {
  // Data storage
  const localStorage = window.localStorage;
  const NOTES_LOCAL_STORAGE = 'NOTES_STORAGE';

  // Redux
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  // Add note
  const addNote = (title, description, fav) => {
    const nexId = notes.length ? Math.max.apply(null, notes.map(c => c.id)) + 1 : 1;
    const date = new Date().toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
    const newOne = {id: nexId, title, description, date, fav };
    const newNotes = [newOne, ...notes];
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
    dispatch(addNoteAction(newOne));
  }

  // Edit note
  const editNote = (noteId, title, description, fav) => {
    const newNotes = [...notes];
    const indexToEdit = newNotes.findIndex(note => note.id === noteId);
    newNotes[indexToEdit] = {...newNotes[indexToEdit], title, description, fav};
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
    dispatch(updateNotesAction(newNotes));
  }

  // Remove note
  const removeNote = noteId => {
    const newNotes = [...notes];
    const indexToRemove = newNotes.findIndex(note => note.id === noteId);
    newNotes.splice(indexToRemove, 1);
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
    dispatch(updateNotesAction(newNotes));
  }

  return (
    <AppContainer>
      <Navigator/>
      <Dashboard>
        <CreateNote addNote={addNote}/>
        <Notes editNote={editNote} removeNote={removeNote}/>
      </Dashboard>
    </AppContainer>
  );
}

export default App;
