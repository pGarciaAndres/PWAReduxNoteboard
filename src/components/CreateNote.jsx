import React, { useState, useRef } from 'react';
import TextCounter from './TextCounter.jsx';
import FavIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import MarkdownToolbar from './MarkdownToolbar.jsx';
import styled from 'styled-components';
import { MAX_LIMIT_CHARACTERS } from '../constants';

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
        max-width: 100%;
        padding-bottom: 10px;
        border: 0;
        outline: none;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        &.textarea {
            display: block;
            font-weight: normal;
            resize: none;
            height: 20px;
            padding-bottom: 0;
        }
    }
    .backstage {
        display: none;
    }
    &:focus-within .backstage {
        display: block;
    }
    &:focus-within .textarea {
        height: 60px;
        padding-bottom: 10px;
    }
`;
const Footer = styled.div`
    text-align: left;
    svg {
        cursor: pointer;
        &.fav {
            color: #f50057;
        }
    }
    button {
        &.create {
            float: right;
            @media (max-width: 575px) {
                padding: 0px 10px;
            }
        }
        line-height: 1.25rem;
        height: 32px;
        padding: 0px 20px;
        border-radius: 4px;
        cursor: pointer;
        background-color: white;
        border: none;
        font-size: 15px;
        outline: none;
    }
    button:hover {
        background: rgba(95,99,104,0.039);
    }
    button:active {
        background: rgba(95,99,104,0.161)!important;
    }
`;

const CreateNote = props => {
    const title = useRef(null);
    const description = useRef(null);
    const [textCounter, setTextCounter] = useState(0);
    const [fav, setFav] = useState(false);

    const addNote = () => {
        props.addNote(title.current.value, description.current.value, fav);
        document.activeElement.blur();
        title.current.value = '';
        description.current.value = '';
        setTextCounter(0);
        setFav(false);
    }

    return (
        <CreateContainer>
            <input className="backstage field" placeholder="Title" ref={title}/>
            <textarea id="textarea_id"
            ref={description}
            className="field textarea"
            placeholder="Take a note..."
            maxLength={MAX_LIMIT_CHARACTERS}
            onChange={() => setTextCounter(description.current.value.length)}/>

            <Footer className="backstage">
                <TextCounter textCounter={textCounter}/>
                <Chip icon={<FavIcon />} label="Favorite" clickable color={fav ? "secondary" : "default"} onClick={() => setFav(!fav)}/>
                <MarkdownToolbar />
                <button className="create" onClick={() => addNote()}>Create</button>
            </Footer>
        </CreateContainer>
    )
}

export default CreateNote