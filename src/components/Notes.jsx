import React from 'react';
import Note from './Note/Note.jsx';
import styled from 'styled-components';
import Mansory from 'react-masonry-component';
import { useSelector } from "react-redux";

const NotesContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    @media only screen and (min-width: 768px) {
        height: auto;
    }
`;
const SectionHeadline = styled.div`
    margin: 0 auto;
    padding: 1em 3em;
    @media only screen and (min-width: 768px) {
        padding: 2em 0em 1em;
    }
    color: #5f6368;
    letter-spacing: .07272727em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .6875rem;
`;
const ContainerStyle = {
    margin: '0 auto'
};
const options = {
    fitWidth: true
};

const Notes = props => {
    // Redux
    const notes = useSelector(state => state.notes);
    const normalNotes = notes.filter(note => note.fav === false);
    const favNotes = notes.filter(note => note.fav === true);

    const renderNotes = notes => {
        return (
            <Mansory enableResizableChildren style={ContainerStyle} options={options}>
                {notes?.map((note, index) =>
                    <Note key={`note ${note.id}`} 
                    note={note} 
                    editNote={props.editNote}
                    removeNote={props.removeNote}/>
                )}
            </Mansory>
        );
    }

    return (
        <NotesContainer>
            {favNotes.length > 0 && <SectionHeadline>FAVORITES</SectionHeadline>}
            {renderNotes(favNotes)}
            {favNotes.length > 0 && normalNotes.length > 0 && <SectionHeadline>OTHERS</SectionHeadline>}
            {renderNotes(normalNotes)}
        </NotesContainer>
    )
}

export default Notes