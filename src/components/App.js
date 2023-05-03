import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
// import {useKeyboardListener} from "./gameArea/FlipCard";
import {useKeyboardListener} from "../gameLogic/gameLogic";


function App() {

    useKeyboardListener();
    return (
        <div className="App">
            <Header />
            <GameArea/>
            <Keyboard/>
        </div>
    );
}

export default App;
