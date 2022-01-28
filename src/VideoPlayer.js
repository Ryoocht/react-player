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
    <div className='player_wrapper'>
      <ReactPlayer 
        className='react_player'
        controls={false}
        url={url}
        playing={playing}
        width='80%'
        height='80%'
        onProgress={handleProgress}
      />
      <div className='player_container'>
        <div className='time_container'>
          <div className='time_style'>0:00</div>
          <div className='hyphen'>/</div>
          <div className='time_style'>88:88</div>
        </div>
        <div className='play_pause'>
          {playing
          ? <FaPause />
          : <FaPlay />
          }
        </div>
        <div className='propgress_box'>
          <div className='loaded_bar'></div>
          <input type="range" className='progress_bar' defaultValue="0"/>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer