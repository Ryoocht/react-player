import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from "react-icons/fa"

const VideoPlayer = ({ url }) => {
  const [ playing, setPlaying ] = useState(false)

  const handleProgress = (e, value) => {
      const { played } = value
      console.log(played)
  }

  return (
    <div className='player-wrapper'>
      <ReactPlayer 
        className='react-player'
        controls={false}
        url={url}
        playing={playing}
        onProgress={handleProgress}
      />
      <div className='timeContainer'>
        <div className='timeStyle'>0:00</div>
        <div className='timeStyle'>/</div>
        <div className='timeStyle'>1:23</div>
      </div>
      <div className='play-pause'>
        {playing
        ? <FaPause />
        : <FaPlay />
        }
      </div>
      <div className='propgress-box'>
        <div className='loaded-bar'></div>
        <input type="range" className='progress-bar' defaultValue="0"/>
      </div>
    </div>
  )
}

export default VideoPlayer