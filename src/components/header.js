import React from 'react';
import Logo from '../images/osu_exam.png';
import { mdiAccount } from '@mdi/js';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

import './header.scss';



function Header({data}) {
  
  return (
    <header className="header">
      <div className="header__container">
      <Link to="/" className="logo"><img className="logo__img" alt="OSU Exam" src={Logo} /><span className="logo__country">.com</span></Link>
      <Link className="AboutUs" to='/ContactUs'><span>Contact Us</span></Link>
      <Link to="/dashboard/examinationEntry" className="h-data">
      <Icon path={mdiAccount} size={1.4} />
      </Link>
      
      </div>
      
    </header>
  );
}

export default Header;
