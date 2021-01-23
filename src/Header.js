import React from 'react';
import './Header.css';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import participay_logo from './participay_logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header_logo_box">
        <img
          className="header__logo"
          src={participay_logo}
          alt="logo"
        />
      </div>
      <div className="header_buttons">
        <Link to='/leaderboard'>
          <IconButton>
            <BarChartIcon className="header__icon" fontSize="large"/>
          </IconButton>
        </Link>
        <Link to='/'>
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
          </IconButton>
        </Link>
        <Link to='/store'>
          <IconButton>
            <ShoppingCartIcon className="header__icon" fontSize="large"/>
          </IconButton>
        </Link>
      </div>
    </div>
  )
}

export default Header;
