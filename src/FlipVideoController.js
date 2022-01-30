import React, { useState } from 'react'
import './video_controller.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const FlipVideoController = ({ flipVideo, onFlipped }) => {
  const [openList, setOpenList] = useState(false)

  const toggleOpenList = () => {
      setOpenList(!openList)
  }

  return(
    <div className='flip_video_wrapper'>
      <div className='select_wraper default_option' onClick={toggleOpenList}>
          <div className='select_title'>
              <p className='speed_value'>{flipVideo}</p>
              {openList
              ? <KeyboardArrowUpIcon className='arrowIcons'/>
              : <KeyboardArrowDownIcon className='arrowIcons'/>
              }
          </div>
      </div>
      {
          openList &&
          <div className='select_wraper animation' onClick={toggleOpenList}>
              {['Flip', 'Flip Back'].map(value => (
                      <div className='select_title' onClick={() => onFlipped(value)}>
                          <p className='speed_value'>{value}</p>
                      </div>
                  ))
              }
          </div>
      }
    </div>
  )
}

export default FlipVideoController
