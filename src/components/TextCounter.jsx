import React from 'react';
import styled from 'styled-components';
import { MAX_LIMIT_CHARACTERS } from '../constants';

const Counter = styled.div`
    font-size: 12px;
    opacity: 0.8;
    font-weight: 100;
    text-align: right;
    &.danger {
        color: red;
    }
`;

const TextCounter = props => {
    return (
        <Counter className={props.textCounter < MAX_LIMIT_CHARACTERS ? "counter" : "counter danger"}>
            {`${props.textCounter}/${MAX_LIMIT_CHARACTERS}`}
        </Counter>
    )
}

export default TextCounter