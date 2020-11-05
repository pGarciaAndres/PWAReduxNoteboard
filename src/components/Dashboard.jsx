import React from 'react';
import CreateNote from './CreateNote.jsx';
import Notes from './Notes.jsx';

const Dashboard = props => {
    return (
        <div className='Dashboard'>
            <h1>Dashboard</h1>
            <CreateNote />
            <Notes />
        </div>
    )
}

export default Dashboard