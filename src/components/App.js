import './App.css';
import Header from "./header/Header";
import GameArea from "./gameArea/GameArea";
import Keyboard from "./keyboard/Keyboard";
import {useEnterHook} from "./gameArea/FlipCard";


function App() {

    useEnterHook();
    return (
        <div className="App">
            <Header />
            <GameArea/>
            <Keyboard/>
        </div>
    );
}

export default App;
