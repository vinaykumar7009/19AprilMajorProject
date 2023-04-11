import React from 'react'
import './Reactplayer2.css'
import ReactPlayer from 'react-player'
const Reactplayer = () => {
    return (
        <div id='reactplayer2'>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/Aq7XVNq-S98'
                />
            </div>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/xWRMFlAs0zU'
                />
            </div>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/ZPBhMZFdlvI'
                />
            </div>
        </div>
        

    )
}

export default Reactplayer
