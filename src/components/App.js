import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
import {useKeyboardListener} from "../gameLogic/gameLogic";
import {useState} from "react";
import initialLetterGrid, {letterGridContext, letterColorContext, initialColorGrid} from "../gameLogic/letterGrid";

function App() {

    const [letterGrid, setLetterGrid] = useState(initialLetterGrid);
    const [colorGrid, setcolorGrid] = useState(initialColorGrid);

    useKeyboardListener(setLetterGrid);

    return (
        <div className="App">
            <Header/>

            <letterColorContext.Provider value={colorGrid}>
                <letterGridContext.Provider value={letterGrid}>
                    <GameArea/>
                </letterGridContext.Provider>
            </letterColorContext.Provider>

            <Keyboard/>
        </div>
    );
}

export default App;
