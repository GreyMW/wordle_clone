import "./Keyboard.css"
import {keyboardColorContext, allOrderedKeys, rowOneKeys, rowTwoKeys, rowThreeKeys} from "../../gameLogic/stateGrids";
import {useContext} from "react";
import {handleKeyboardEvent} from "../../gameLogic/gameLogic";

function Keyboard() {

    const colorContext = useContext(keyboardColorContext);
    function createLetterComponent(letter){

        let kbe = createKeyboardEvent(letter);
        const displayColor = colorContext[allOrderedKeys.findIndex((ordered_letter) => ordered_letter === letter)];
        letter = letter.toUpperCase()

        return (
            <button
                className={'keyboard-button '+displayColor}
                id={letter}
                onClick={() => handleKeyboardEvent(kbe)}
                key={letter}>{letter}
            </button>
        )
    }

    return (
        <div className={'keyboard-area'}>
            <div className={'keyboard-row row-1'}>
                {rowOneKeys.map((letter) => createLetterComponent(letter))}
            </div>
            <div className={'keyboard-row row-2'}>
                {rowTwoKeys.map((letter) => createLetterComponent(letter))}
            </div>
            <div className={'keyboard-row row-3'}>
                {rowThreeKeys.map((letter) => createLetterComponent(letter))}
            </div>
        </div>

    )
}

function createKeyboardEvent(letter){
    if (letter.toUpperCase() === "ENTER"){
        letter = "Enter";
    }
    if (letter.toUpperCase() === "BACKSPACE"){
        letter = "Backspace";
    }
    return new KeyboardEvent('keydown', {key: letter, code: letter});
}

export default Keyboard;