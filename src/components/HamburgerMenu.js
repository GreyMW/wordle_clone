import React, {useState} from "react";
import './HamburgerMenu.css';
import nyt_logo from '../images/New_York_Times_T_icon.png';
import {faArrowLeft, faArrowRight, faBars, faX} from '@fortawesome/free-solid-svg-icons';
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
                <li><img src={nyt_logo} alt="" className={'nyt-logo'}/>
                    <a href={'https://www.nytimes.com/games/wordle/index.html'}>  The NYT Wordle Site </a> </li>
                <li> <a href={""}><FontAwesomeIcon icon={faArrowLeft} />  Back to Portfolio </a> </li>
                <li> <a href={""}><FontAwesomeIcon icon={faArrowRight} />  To Wordle Solver </a> </li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;