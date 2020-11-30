import React from 'react'

function UserInfo(props) {
    const myName = props.myName;
    const myDescryption = props.myDescryption;

    return (
        <div>
            <h1>{myName}</h1>
            
            {myDescryption}
            
        </div>
    )
}

export default UserInfo;