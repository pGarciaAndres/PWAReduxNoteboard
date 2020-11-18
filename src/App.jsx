import React, { useState } from 'react';
import Navigator from './components/Navigator.jsx';
import CreateNote from './components/CreateNote.jsx';
import Notes from './components/Notes.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`
const Dashboard = styled.div`
  float: left;
  width: calc(100% - 200px);
  
  @media (max-width: 800px) {
    width: 100%;
  }
`

const App = () => {
  // Data storage
  const localStorage = window.localStorage;
  const NOTES_LOCAL_STORAGE = 'NOTES_STORAGE';
  
  // Note list 
  const storage = localStorage.getItem(NOTES_LOCAL_STORAGE);
  const initNotes = storage ? JSON.parse(storage) : [];
  const [notes, setNotes] = useState(initNotes);

  // Add note
  const addNote = (title, description) => {
    const nexId = notes.length ? Math.max.apply(null, notes.map(c => c.id)) + 1 : 1;
    const date = new Date().toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
    const newOne = {id: nexId, title, description, date };
    const newNotes = [newOne, ...notes];
    setNotes(newNotes);
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
  }

  // Edit note
  const editNote = (noteId, title, description) => {
    console.log(noteId);
    const newNotes = [...notes];
    const indexToEdit = newNotes.findIndex(note => note.id === noteId);
    newNotes[indexToEdit] = {...newNotes[indexToEdit], title, description};
    setNotes(newNotes);
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
  }

  // Remove note
  const removeNote = (noteId) => {
    const newNotes = [...notes];
    const indexToRemove = newNotes.findIndex(note => note.id === noteId);
    newNotes.splice(indexToRemove, 1);
    setNotes(newNotes);
    localStorage.setItem(NOTES_LOCAL_STORAGE, JSON.stringify(newNotes));
  }

  return (
    <AppContainer>
      <Navigator/>
      <Dashboard>
        <CreateNote addNote={addNote}/>
        <Notes notes={notes} editNote={editNote} removeNote={removeNote}/>
      </Dashboard>
    </AppContainer>
  );
}

export default App;
