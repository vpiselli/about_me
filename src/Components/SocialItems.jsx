import React from 'react'
import A from './A';

function SocialItems(props) {
    const { name, url, icon } = props;

    return (
        <li>
            <A href={url} class={icon}>{name}</A>
        </li>
    )
}

export default SocialItems;