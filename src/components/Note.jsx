import React from 'react';
import { faHeart, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import './Note.scss';

const DefaultColor = '#5D9CEC';
const DefaultTextColor = '#FFFFFF';
const Card = styled.div`
    width: 240px;
    margin: 20px;
    @media (max-width: 575px) {
        width: 360px;
}`;

const CardContent = styled.div`
    position: relative;
    background: ${DefaultColor};
    color: ${DefaultTextColor};
    padding: 1em;
    border-radius: 1rem;
    &:hover .multi-button, .multi-button:focus-within {
        width:10rem;
        height:10rem;
}`;

const Footer = styled.div`
    font-size: 12px;
    text-align: right;
    opacity: 0.8;
    font-weight: 100;
`;

const Note = props => {
    return (
        <Card className="card">
            <div className="multi-button">
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} onClick={() => props.removeNote(props.note.id)}/>
                </button>
            </div>
            <CardContent>
                <h3><span>{props.note.title}</span></h3>
                <h4><span>{props.note.description}</span></h4>
                <Footer>{props.note.date}</Footer>
            </CardContent>
        </Card>
    )
}

export default Note