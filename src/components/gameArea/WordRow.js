import FlipCard from "./FlipCard";
import './WordRow.css';

function WordRow(props) {

    const numCols = [...Array(5).keys()];

    return (
        <div className={'card-container'}>
            {numCols.map((x) => createFlipCards(props.row, x))}
        </div>
    )
}

function createFlipCards(row, col){
    return (
        <FlipCard row={row} col={col} key={col}/>
    )
}

export default WordRow;