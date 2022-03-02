import React from 'react';

import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton aria-label="add an alarm">
                <PersonIcon fontSize="large" className='header__icon' />
            </IconButton>


            <LocalFireDepartmentIcon className="header__logo" fontSize="large" style={{ color: "#FF5864" }} />

            <IconButton aria-label="add an alarm">
                <ForumIcon fontSize="large" className='header__icon' />
            </IconButton>
        </ div >
    );
}

export default Header;