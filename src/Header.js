import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import  Language  from '@material-ui/icons/Language';
import Avatar from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <img  className="header_icon"
            src="https://www.jouan-derham.ch/files/4415/7968/8559/Capture_decran_2020-01-22_a_11.22.11.png" alt="airbnb"/>
                  </Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <ExpandMoreIcon/>
                <Language/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
