import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartSimple, faCircleQuestion, faGear} from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    return (
        <div className={'container'}>
            <div id={'header-hamburger'}>
                <HamburgerMenu/>
            </div>
            <div id={'header-title'}>
                <h1>WORDLE CLONE</h1>
            </div>
            <div id={'header-icons'}>
                {/*<h1 ><FontAwesomeIcon icon="fa-regular fa-circle-question" /></h1>*/}
                {/*<h1 ><FontAwesomeIcon icon={faEnvelope} /></h1>*/}
                <h1><FontAwesomeIcon icon={faCircleQuestion} /></h1>
                <h1><FontAwesomeIcon icon={faChartSimple} /></h1>
                <h1><FontAwesomeIcon icon={faGear} /></h1>
            </div>
        </div>
    );
}

export default Header;