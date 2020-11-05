import React, { useState } from 'react';
import Navigator from './components/Navigator.jsx';
import Dashboard from './components/Dashboard.jsx';
import './App.scss';

const App = () => {
  // Data storage
  const localStorage = window.localStorage;
  const NOTES_LOCAL_STORAGE = 'NOTES_STORAGE';
  
  // Notes List 
  const storage = localStorage.getItem(NOTES_LOCAL_STORAGE);
  const initNotes = storage ? JSON.parse(storage) : [];
  const [notes, setNotes] = useState(initNotes);

  return (
    <div className="App">
      <Navigator />
      <Dashboard />
    </div>
  );
}

export default App;
