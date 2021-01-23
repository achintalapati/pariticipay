import React from 'react';
import './Header.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <SupervisorAccountIcon className="header__icon" fontSize="large"/>
      </IconButton>
      <IconButton>
        <AddIcon className="header__icon" fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default Header;
