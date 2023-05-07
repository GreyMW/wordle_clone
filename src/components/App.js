import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
import {addGameOverModalSetter, addGameStateSetters, useKeyboardListener} from "../gameLogic/gameLogic";
import {useState} from "react";
import GameOverModal from "./winLossScreens/GameOverModal";
import initialLetterGrid, {letterGridContext, letterColorContext, initialColorGrid, keyboardColorContext, initialKeyboardColors} from "../gameLogic/stateGrids";

function App() {

    const [letterGrid, setLetterGrid] = useState(initialLetterGrid);
    const [colorGrid, setColorGrid] = useState(initialColorGrid);
    const [keyboardColorGrid, setKeyboardColorGrid] =useState(initialKeyboardColors);

    addGameStateSetters(setLetterGrid, setColorGrid, setKeyboardColorGrid);
    useKeyboardListener();
    addGameOverModalSetter(modalToggle);

    return (
        <div className="App">
            <Header/>

            <letterColorContext.Provider value={colorGrid}>
                <letterGridContext.Provider value={letterGrid}>
                    <GameArea/>
                </letterGridContext.Provider>
            </letterColorContext.Provider>

            <keyboardColorContext.Provider value={keyboardColorGrid}>
                <Keyboard/>
            </keyboardColorContext.Provider>

            <GameOverModal/>
        </div>
    );
}

function modalToggle() {
    //the React equivalent of this would be using a className, but the full functionality of this
    //is apparently bound to the function .showModal(), hence we have opted for this over the useState pattern
    const modal = document.querySelector(".game-over-modal");
    modal.showModal();
}


export default App;
