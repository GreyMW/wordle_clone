import "./Keyboard.css"
import {keyboardColorContext, allOrderedKeys, rowOneKeys, rowTwoKeys, rowThreeKeys} from "../../gameLogic/stateGrids";
import {useContext} from "react";

function Keyboard() {

    const colorContext = useContext(keyboardColorContext);
    function createLetterComponent(letter){

        const displayColor = colorContext[allOrderedKeys.findIndex((x) => x === letter)];
        letter = letter.toUpperCase()
        return (
            <button className={'keyboard-button '+displayColor} id={letter} key={letter}>{letter}</button>
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

export default Keyboard;