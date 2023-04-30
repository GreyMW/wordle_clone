import './App.css';
import Header from "./Header";
import GameArea from "./GameArea";
import Keyboard from "./Keyboard";


function App() {
    return (
        <div className="App">
            <p>This is the starting point</p>
            <Header />
            <GameArea/>
            <Keyboard/>
        </div>
    );
}

export default App;
