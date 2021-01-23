import React from 'react';
import './Header.css';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <BarChartIcon className="header__icon" fontSize="large"/>
      </IconButton>
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large"/>
      </IconButton>
      <IconButton>
        <ShoppingCartIcon className="header__icon" fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default Header;
