import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
import {useKeyboardListener} from "../gameLogic/gameLogic";
import {useState} from "react";
import initialLetterGrid, {letterGridContext} from "../gameLogic/letterGrid";

function App() {

    const [letterGrid, setLetterGrid] = useState(initialLetterGrid);


    useKeyboardListener(setLetterGrid);

    return (
        <div className="App">
            <Header/>

            <letterGridContext.Provider value={letterGrid}>
                <GameArea/>
            </letterGridContext.Provider>

            <Keyboard/>
        </div>
    );
}

export default App;
