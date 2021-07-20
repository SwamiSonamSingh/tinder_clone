import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import {IconButton} from '@material-ui/core';
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="headericon"/>
            </IconButton>
            <img src="https://www.thecoco.net/wp-content/uploads/2018/08/tinder-logo.png"/>
            <IconButton>
                <ForumIcon fontSize="large" className="headericon"/>
            </IconButton>
        </div>
    )
}
export default Header