import React from 'react'

function UserAvatar(props) {
    const avatar = props.avatar;

    return (
        <span className="avatar">
            <img src={avatar} width="122" height="122" alt="" />
        </span>
    )
}

export default UserAvatar;