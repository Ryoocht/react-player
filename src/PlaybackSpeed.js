import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const PlaybackSpeed = () => {
    const selectSpeed = useStyles()
    const [selected, setSelected] = useState(false)

    return (
        <div className={selectSpeed.wrapper}>
            <Button
                className={selectSpeed.root}
                variant='contained'
                disabled={selected}
            >
                Speed
            </Button>
        </div>
    )
}

export default PlaybackSpeed

const useStyles = makeStyles({
    wrapper: {
        position: 'absolute',
        top: '5%',
        left: '50%',
    },
    defaultButton: {
        background: '#fff',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
})