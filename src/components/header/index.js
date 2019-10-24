import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

import './styles.css';

function Header() {
  return (
    <div className="navbar">
      <img id="logo" src={logo} />
      <span id="myProfile">
        Meu Perfil&nbsp;
        <FontAwesomeIcon icon={faUser} />
      </span>
    </div>
  )
}

export default Header;