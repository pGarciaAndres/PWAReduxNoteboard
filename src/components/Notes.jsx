import React from 'react';
import Note from './Note.jsx';
import styled from 'styled-components';

const NoteContainer = styled.div`
    width: 95%;
    margin: 60px auto;
    @media (max-width: 800px) {
        width: 85%;
        margin-top: 50px;
        grid-gap: 2rem;
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 3rem;
`;

const Notes = props => {
    return (
        <NoteContainer>
            {props.notes.map((note, key) =>
                <Note key={`note ${note.id}`} note={note} removeNote={props.removeNote}/>
            )}
        </NoteContainer>
    )
}

export default Notes