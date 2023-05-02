import "./Keyboard.css"
function Keyboard() {
    let rowOneLetters = ['q','w','e','r','t','y','u','i','o','p'];
    let rowTwoLetters = ['a','s','d','f','g','h','j','k','l'];
    let rowThreeLetters = ['enter', 'z','x','c','v','b','n','m','backspace'];

    function createLetterComponent(letter){
        letter = letter.toUpperCase()
        return (
            <button className={'keyboard-button'} id={letter}>{letter}</button>
        )
    }

    return (
        <div className={'keyboard-area'}>
            <div className={'keyboard-row row-1'}>
                {rowOneLetters.map((letter) => createLetterComponent(letter))}
            </div>
            <div className={'keyboard-row row-2'}>
                {rowTwoLetters.map((letter) => createLetterComponent(letter))}
            </div>
            <div className={'keyboard-row row-3'}>
                {rowThreeLetters.map((letter) => createLetterComponent(letter))}
            </div>
        </div>

    )
}

export default Keyboard;