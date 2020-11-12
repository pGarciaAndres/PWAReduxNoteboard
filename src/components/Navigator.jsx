import React from 'react';
import NotesIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TrashIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const NavContainer = styled.div`
    float: left;
    width: 180px;
    margin-top: 30px;
    margin-right: 20px;

    @media (max-width: 800px) {
        margin-top: 0px;
    }

    svg {
        padding-left: 10px;
        float: right;
        font-size: 2rem;
    }
    h2 {
        display: inline-block;
        vertical-align: super;
        padding: 0px 10px;
        margin: 0;
    }
`;

const Item = styled.div`
    background: #5d9cec;
    color: white;
    text-align: left;
    border-radius: 0 25px 25px 0;
    padding: 10px 20px 8px 0;
    margin-top: 3px;
    cursor: pointer;
    width: 155px;
    transition: transform 0.5s;
    transform: translate(-117px);
    &:first-child {
        transform: translate(0px);
    }
    &:hover {
        transform: translate(0px);
    }
`;

const Navigator = props => {
    return (
        <NavContainer>
            <Item>
                <h2>Notes</h2>
                <NotesIcon />
            </Item>
            <Item>
                <h2>Favorite</h2>
                <FavoriteIcon />
            </Item>
            <Item>
                <h2>Trash</h2>
                <TrashIcon />
            </Item>
        </NavContainer>
    )
}

export default Navigator