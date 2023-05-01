import FlipCard from "./FlipCard";
import './WordRow.css';

function WordRow() {
    return (
        <div className={'card-container'}>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>

        </div>
    )
}

export default WordRow;