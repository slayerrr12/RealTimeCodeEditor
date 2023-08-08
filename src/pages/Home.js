import React from 'react'


const Home = () => {
    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>

                <h2>Stream Script</h2>
                <h4 className='mainLabel'> Paste Room Id</h4>
                <div>
                    <input type="text" className='inputbox' placeholder='RoomId' />
                    <input type="text" className='inputbox' placeholder='UserName' />
                </div>
                <button className='btn joinBtn'>Join</button>
                <span>if you Dont have an invote then create a room</span>
            </div>

        </div>
    )
}


export default Home