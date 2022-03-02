import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className='SwipeButtons'>
            <IconButton color="primary" aria-label="add an alarm" className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large' style={{ color: "#f5b748" }} />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm" className='swipeButtons__repeat'>
                <CloseIcon fontSize='large' style={{ color: "#ec5e6f" }} />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm" className='swipeButtons__repeat'>
                <StarRateIcon fontSize='large' style={{ color: "#62b4f9" }} />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm" className='swipeButtons__repeat'>
                <FavoriteIcon fontSize='large' style={{ color: "#76e2b3" }} />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm" className='swipeButtons__repeat'>
                <FlashOnIcon fontSize='large' style={{ color: "#915dd1" }} />
            </IconButton>

        </div>
    );
}

export default SwipeButtons;