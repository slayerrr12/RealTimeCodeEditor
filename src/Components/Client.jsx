import React from 'react'
import Avatar from 'react-avatar'


const Client = ({username}) => {
    return (
        <div className='mt-1.5'>
            <span className='my-0.5'>
                {username}
            </span>
            <div>
            <Avatar name={username} size={50} round="14px"/>
            </div>
            
        </div>
    )
}

export default Client
