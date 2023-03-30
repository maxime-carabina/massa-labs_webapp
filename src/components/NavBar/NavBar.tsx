import React from 'react';
import './NavBar.css';

/* Components */
import ButtonBorderRed from '../ButtonBorderRed/ButtonBorderRed';

/* Assets */
import LogoMassa from '../../assets/logo_massa.webp';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <a href="/">
          <img src={LogoMassa} alt="Massa labs logo" />
        </a>
      </div>
      <ul className="NavBar__links">
        <li>
          <a href="#">About Massa</a>
        </li>
        <li>
          <a href="#">TestNet</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
        <li>
          <ButtonBorderRed label="EXPLORER" isClickable={true} />
        </li>
      </ul>
    </div>
  );
}
