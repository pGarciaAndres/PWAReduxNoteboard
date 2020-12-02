import React, { useState, useRef } from 'react';
import TextCounter from '../TextCounter.jsx';
import { faHeart, faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import './Note.scss';

const DefaultColor = '#5D9CEC';
const DefaultTextColor = '#FFFFFF';
const Card = styled.div`
    width: 240px;
    margin: 20px;
    @media (max-width: 575px) {
        width: 320px;
    }
    @media (max-width: 400px) {
        width: 280px;
    }
    .fav {
        position: absolute;
        z-index: 1;
        top: 0.25rem;
        font-size: 20px;
        color: white;
        left: 13.2rem;
        @media (max-width: 575px) {
            left: 15.5rem;
        }
    }`;
const CardContent = styled.div`
    position: relative;
    background: ${DefaultColor};
    color: ${DefaultTextColor};
    padding: 0.875em;
    border-radius: 1rem;
    &:hover .multi-button, .multi-button:focus-within {
        width:10rem;
        height:10rem;
    }
    .field {
        width: -webkit-fill-available;
        margin-top: 15px;
        padding: 10px 15px;
        border: 0;
        outline: none;
        border-radius: 8px;
        height: auto;
        &.textarea {
            resize: none;
            overflow: hidden;
        }
    }
    h3 {
        font-size: 1rem;
    }
    h4 {
        font-weight: normal;
        font-size: 0.875rem;
    }
`;
const Footer = styled.div`
    font-size: 12px;
    text-align: right;
    opacity: 0.8;
    font-weight: 100;
    margin-top: 10px;
`;

const Note = props => {
    const [editable, setEditable] = useState(false);
    const title = useRef('');
    const description = useRef('');

    const maxCounter = 200;
    const [textCounter, setTextCounter] = useState(props.note.description.length);

    const makeNoteEditable = () => {
        if(editable) {
            const changesTitle = title.current.value !== props.note.title;
            const changesDescription = description.current.value !== props.note.description;
            if(changesTitle || changesDescription) {
                props.editNote(props.note.id, title.current.value, description.current.value, props.note.fav);
            }
        }
        setEditable(!editable);
    }

    return (
        <Card className={props.note.fav ? 'card fav' : 'card'}>
            <div className="multi-button">
                <button className={props.note.fav ? 'selected' : ''}
                disabled={editable}
                onClick={() => props.editNote(props.note.id, props.note.title, props.note.description, !props.note.fav)}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className={editable ? 'confirm' : undefined} onClick={() => makeNoteEditable()}>
                    <FontAwesomeIcon icon={editable ? faCheck : faPen}/>
                </button>
                <button disabled={editable} onClick={() => props.removeNote(props.note.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>

            {props.note.fav && <div className="fav">
                <FontAwesomeIcon icon={faHeart} />
            </div>}

            <CardContent className="cardContent">
                {editable ?
                    <>
                        <input className="field" 
                        placeholder="Title" 
                        ref={title} 
                        defaultValue={props.note.title}/>

                        <textarea className="field textarea" 
                        placeholder="Take a note..." 
                        ref={description} 
                        defaultValue={props.note.description}
                        rows={props.note.description.length/15}
                        maxLength={maxCounter}
                        onChange={() => setTextCounter(description.current.value.length)}/>
                        <TextCounter textCounter={textCounter} maxCounter={maxCounter}/>
                    </>
                :
                    <>
                        <h3><span>{props.note.title}</span></h3>
                        <h4><span>{props.note.description}</span></h4>
                    </>
                }
                <Footer>{props.note.date}</Footer>
            </CardContent>
        </Card>
    )
}

export default Note