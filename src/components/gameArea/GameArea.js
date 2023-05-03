import './GameArea.css';
import WordRow from "./WordRow";
function GameArea() {
    const rows = [...Array(6).keys()];

    return (
        <div className={'container-game-area'}>
            {rows.map((x) => createWordRow(x))}
        </div>
    )
}

function createWordRow(row_num){
    return (
        <WordRow row={row_num} key={row_num}/>
    )
}

export default GameArea;