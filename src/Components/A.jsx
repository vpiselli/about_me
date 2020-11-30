import React from 'react';

function A(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className={props.class} >{props.children}</a>
    )
}

export default A;