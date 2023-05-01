import './App.css';
import Header from "./Header";
import GameArea from "./GameArea";
import Keyboard from "./Keyboard";
import {useEnterHook} from "./FlipCard";


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
