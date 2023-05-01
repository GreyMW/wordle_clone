import './Header.css';
function Header() {
    return (
        <div className={'container'}>
            <div id={'header-hamburger'}>
                <h1>hamburger menu</h1>
            </div>
            <div id={'header-title'}>
                <h1>WORDLE CLONE</h1>
            </div>
            <div id={'header-icons'}>
                <h1 >icons</h1>
            </div>
        </div>
    );
}

export default Header;