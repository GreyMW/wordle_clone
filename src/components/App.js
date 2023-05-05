import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
import {useKeyboardListener} from "../gameLogic/gameLogic";
import {useState} from "react";
import initialLetterGrid, {letterGridContext, letterColorContext, initialColorGrid, keyboardColorContext, initialKeyboardColors} from "../gameLogic/letterGrid";

function App() {

    const [letterGrid, setLetterGrid] = useState(initialLetterGrid);
    const [colorGrid, setColorGrid] = useState(initialColorGrid);
    const [keyboardColorGrid, setKeyboardColorGrid] =useState(initialKeyboardColors);


    useKeyboardListener(setLetterGrid, setColorGrid, setKeyboardColorGrid);

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

        </div>
    );
}

export default App;
