import React from 'react';
import Note from './Note.jsx';
import Mansory from 'react-masonry-component';

const ContainerStyle = {
    margin: '0 auto'
};
const options = {
    fitWidth: true
};

const Notes = props => {
    return (
        <Mansory enableResizableChildren style={ContainerStyle} options={options}>
            {props.notes.map((note, index) =>
                <Note key={`note ${note.id}`} 
                note={note} 
                editNote={props.editNote}
                removeNote={props.removeNote}/>
            )}
        </Mansory>
    )
}

export default Notes