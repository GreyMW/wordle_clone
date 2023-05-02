import React, {useState} from "react";
import './HamburgerMenu.css';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function HamburgerMenu() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={'hamburger-menu'}>
            <button
                className={'toggle'}
                onClick={() => setMenuOpen((prev) => !prev)}>
                {menuOpen ?  <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
            <ul className={`menu-list${menuOpen ? ' show-menu' : ''}`}>
                <li> 1 </li>
                <li> 2 </li>
                <li> 3 </li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;