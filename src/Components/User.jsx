import React from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

function User(props) {
    const myName = props.myName;
    const myDescryption = props.myDescryption;
    const avatar = props.avatar;

    return (

        // Main info
        <div>
            <header>
                <UserAvatar avatar={avatar} />
                <UserInfo myName={myName} myDescryption={myDescryption} />
            </header>

            <hr />
        </div>        
    )
}

export default User;
