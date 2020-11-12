import React from 'react';
import { faHeart, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import './Note.scss';

const Footer = styled.div`
    font-size: 12px;
    text-align: right;
    opacity: 0.8;
    font-weight: 100;
`;

const Note = props => {
    return (
        <div className="card">
            <div className="multi-button">
                <button>
                    <FontAwesomeIcon
                    icon={faHeart} />
                </button>
                <button>
                    <FontAwesomeIcon
                    icon={faPen} />
                </button>
                <button>
                    <FontAwesomeIcon
                    icon={faTrash} 
                    onClick={() => props.removeNote(props.note.id)}/>
                </button>
            </div>
            <div className="container">
                <h3><span>{props.note.title}</span></h3>
                <h4><span>{props.note.description}</span></h4>
                <Footer>{props.note.date}</Footer>
            </div>
        </div>
    )
}

export default Note