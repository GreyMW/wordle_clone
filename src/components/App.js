import './App.css';
import Header from "./Header";
import GameArea from "./GameArea";
import Keyboard from "./Keyboard";
import FlipCard from "./FlipCard";


function App() {
    return (
        <div className="App">
            <Header />
            <FlipCard/>
            <GameArea/>
            <Keyboard/>
        </div>
    );
}

export default App;
