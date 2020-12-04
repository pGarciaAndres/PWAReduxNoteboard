import React from 'react';
import Note from './Note/Note.jsx';
import styled from 'styled-components';
import Mansory from 'react-masonry-component';
import { useSelector } from "react-redux";
import * as constants from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

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
const EmptyLayout = styled.div`
    font-size: 2em;
    font-weight: 700;
    margin-top: 2em;
    font-style: italic;
    opacity: 0.25;
    svg {
        overflow: visible;
        font-size: 3em;
        display: block;
        margin: 0.3em auto auto;
    }
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

    const renderEmpty = () => {
        return (
            <EmptyLayout>
                {constants.EMPTY_LABEL}
                <FontAwesomeIcon icon={faMugHot} />
            </EmptyLayout>
        )
    }

    return (
        <NotesContainer>
            {favNotes.length > 0 && <SectionHeadline>{constants.FAVORITES_LABEL}</SectionHeadline>}
            {renderNotes(favNotes)}
            {favNotes.length > 0 && normalNotes.length > 0 && <SectionHeadline>{constants.OTHERS_LABEL}</SectionHeadline>}
            {renderNotes(normalNotes)}
            {favNotes.length === 0 && normalNotes.length === 0 && renderEmpty()}
        </NotesContainer>
    )
}

export default Notes