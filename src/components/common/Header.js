import React from 'react';
import '../../styles/header/header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="title">Select Games</div>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};

export default Header;