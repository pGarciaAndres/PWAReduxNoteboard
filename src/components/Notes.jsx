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
const ContainerStyle = {
    margin: '0 auto'
};
const options = {
    fitWidth: true
};

const Notes = props => {
    // Redux
    const notes = useSelector(state => state.notes);

    return (
        <NotesContainer>
            <Mansory enableResizableChildren style={ContainerStyle} options={options}>
                {notes?.map((note, index) =>
                    <Note key={`note ${note.id}`} 
                    note={note} 
                    editNote={props.editNote}
                    removeNote={props.removeNote}/>
                )}
            </Mansory>
        </NotesContainer>
    )
}

export default Notes