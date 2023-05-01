import './GameArea.css';
import WordRow from "./WordRow";
function GameArea() {
    return (
        <div className={'container-game-area'}>
            <WordRow/>
            <WordRow/>
            <WordRow/>
            <WordRow/>
            <WordRow/>
            <WordRow/>
        </div>
    )
}

export default GameArea;