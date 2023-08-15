import React from 'react'
import Avatar from 'react-avatar'


const Client = (username) => {
    return (
        <div className='client'>
            <span className='username'>
                {username}
            </span>
            < Avatar name={username} size={50} round="14px"/>
        </div>
    )
}

export default Client
