import React, { useState } from 'react'
import './video_controller.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const PlaybackRate = ({ playbackRate, onPlaybackRateChange}) => {
    const [openList, setOpenList] = useState(false)

    const toggleOpenList = () => {
        setOpenList(!openList)
    }

    return (
        <div className='playbackrate_wrapper'>
            <div className='select_wraper default_option' onClick={toggleOpenList}>
                <div className='select_title'>
                    <p className='speed_value'>{playbackRate}x</p>
                    {openList
                    ? <KeyboardArrowUpIcon className='arrowIcons'/>
                    : <KeyboardArrowDownIcon className='arrowIcons'/>
                    }
                </div>
            </div>
            {
                openList &&
                <div className='select_wraper animation' onClick={toggleOpenList}>
                    {[0.5, 1.0, 1.5, 2.0].map(rate => (
                            <div className='select_title' onClick={() => onPlaybackRateChange(rate)}>
                                <p className='speed_value'>{rate}x</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default PlaybackRate