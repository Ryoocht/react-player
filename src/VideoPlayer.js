import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from "react-icons/fa"

const VideoPlayer = ({ url }) => {
  const [ playing, setPlaying ] = useState(false)
  const [ currentTime, setCurrentTime ] = useState(0)
  const [ loadedTime, setLoadedTime ] = useState(0)
  const [ duration, setDuration ] = useState(0)

  const videoPlayer = useRef()
  const progressBar = useRef()
  const loadBar = useRef()

  useEffect(() => {
    progressBar.current.max = duration
  }, [duration]);

  const handleProgress = ({ played, loaded, playedSeconds }) => {
    setCurrentTime(playedSeconds)
    changeProgressBarTime(played)
    setLoadedTime(loaded)
    changeLoadBarTime(loaded)
    progressBar.current.value = currentTime
  }

  const togglePlayPause = () => {
    setPlaying(!playing)
  }

  const handleDuration = (seconds) => {
    setDuration(seconds)
  }

  const changeProgress = (e) => {
    setCurrentTime(e.target.value)
    changeProgressBarTime()
    videoPlayer.current.seekTo(e.target.value)
  }

  const changeProgressBarTime = (played) => {
    progressBar.current.style.setProperty(
      '--played-width', 
      played
      ?  `${Math.round((played * 100) * 10) / 10}%`
      : `${progressBar.current.value / duration * 100}%`
      )
  }

  const changeLoadBarTime = (loaded) => {
    console.log(`${Math.floor(loaded * 100)}%`);
    loadBar.current.style.setProperty('--loaded-width', `${Math.floor(loaded * 100)}%`)
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
        ref={videoPlayer}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className='player_container'>
        <div className='time_container'>
          <div className='time_style'>{calculateTime(currentTime) ?? '0:00'}</div>
          <div className='hyphen'>/</div>
          <div className='time_style'>{calculateTime(duration) ?? '0:00'}</div>
        </div>
        <div className='play_pause' onClick={togglePlayPause}>
          {playing
          ? <FaPause />
          : <FaPlay />
          }
        </div>
        <div className='propgress_box'>
          <div className='loaded_bar' ref={loadBar}></div>
          <input 
            type="range" 
            className='progress_bar' 
            defaultValue="0" 
            ref={progressBar}
            onChange={changeProgress}/>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60)
  // const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const seconds = Math.floor(secs % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${returnedSeconds}`
}