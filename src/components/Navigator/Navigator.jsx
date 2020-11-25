import React, { useState } from 'react';
import { faBars, faStickyNote, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import './Navigator.scss';

const NavContainer = styled.div`
    position: fixed;
    top: auto;
    right: 7.25em;
    bottom: 6.5em;
    z-index: 1;
    @media only screen and (min-width: 768px) {
        top: 1em;
        right: 8em;
    }
`;
const Button = styled.button`
    opacity: 0.8;
    position: absolute;
    z-index: 2;
    font-size: 3em;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    background: #344458;
    color: white;
    outline: none;
    padding: 0;
`;

const Navigator = props => {
    const [menu, changeMenu] = useState(false);

    return (
        <NavContainer className="nav">
            <Button onClick={() => changeMenu(!menu)}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            {menu && <div className="multi-button">
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faStickyNote} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>}
        </NavContainer>
    )
}
    
export default Navigator