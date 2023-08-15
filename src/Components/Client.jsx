import React from 'react'

const Client = (username) => {
    return (
        <div className='client'>
            <span className='username'>
                {username}
            </span>
            < Avatar />
        </div>
    )
}

export default Client
