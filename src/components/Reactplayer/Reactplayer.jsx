import React from 'react'
import './Reactplayer.css'
import ReactPlayer from 'react-player'
const Reactplayer = () => {
    return (
        <div id='reactplayer'>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/3-LugL0XqV8'
                />
            </div>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/4PBG6GHVOLA'
                />
            </div>
            <div >
                <ReactPlayer controls width='380px'
                    height='240px'
                    url='https://youtu.be/ME0z6BByW5U'
                />
            </div>
        </div>
        


    )
}

export default Reactplayer
