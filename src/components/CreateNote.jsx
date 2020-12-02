import React, { useState, useRef } from 'react';
import TextCounter from './TextCounter.jsx';
import FavIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

const CreateContainer = styled.div`
    width: 85%;
    max-width: 600px;
    text-align: left;
    margin: 60px auto 10px auto;
    padding: 10px 15px;
    @media (max-width: 800px) {
        margin-top: 15px;
    }
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.20);
    .field {
        width: -webkit-fill-available;
        max-width: 94%;
        padding-bottom: 10px;
        border: 0;
        outline: none;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        &.textarea {
            font-weight: normal;
            resize: none;
            overflow: hidden;
        }
    }
`;
const Actions = styled.div`
    text-align: left;
    svg {
        cursor: pointer;
    }
    svg.fav:hover {
        color: red;
    }
    button {
        cursor: pointer;
        float: right;
        background-color: white;
        border: none;
        border-bottom-right-radius: 8px;
        padding: 5px 0px 6px 180px;
        @media (max-width: 575px) {
            padding-left: 100px;
        }
        font-size: 15px;
        outline: none;
    }
    button:hover {
        background-image: linear-gradient(to right, white, rgb(98 168 255 / 13%));
    }
`;

const CreateNote = props => {
    const title = useRef(null);
    const description = useRef(null);
    const maxCounter = 200;
    const [textCounter, setTextCounter] = useState(0);

    const addNote = () => {
        props.addNote(title.current.value, description.current.value);
        title.current.value = '';
        description.current.value = '';
        setTextCounter(0);
    }

    return (
        <CreateContainer>
            <input className="field" placeholder="Title" ref={title}/>
            <textarea ref={description}
            className="field textarea"
            placeholder="Take a note..."
            maxLength={maxCounter}
            onChange={() => setTextCounter(description.current.value.length)}/>
            <TextCounter textCounter={textCounter} maxCounter={maxCounter}/>

            <Actions>
                <FavIcon className="fav" />
                <button onClick={() => addNote()}>Create</button>
            </Actions>
        </CreateContainer>
    )
}

export default CreateNote