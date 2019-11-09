import React from "react";
import { Link } from "react-router-dom";

//Child components
import MenuDropdown from "./MenuDropdown";
const Menu = () => {
  return (
    <div className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Components
          </Link>
          <MenuDropdown />
        </li>
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Computers
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Peripherals
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Net Devices
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='/' className='menu__link'>
            Accessories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
