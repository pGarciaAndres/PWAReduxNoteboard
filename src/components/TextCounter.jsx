import React from 'react';
import styled from 'styled-components';

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
        <Counter className={props.textCounter < props.maxCounter ? "counter" : "counter danger"}>
            {`${props.textCounter}/${props.maxCounter}`}
        </Counter>
    )
}

export default TextCounter