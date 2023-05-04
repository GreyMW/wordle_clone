import './FlipCard.css';
import {useContext} from "react";
import {letterGridContext} from "../../gameLogic/letterGrid";


function FlipCard(props) {
    const row_col = String(props.row) + String(props.col);
    const gridValue = useContext(letterGridContext);
    const displayValue = gridValue[props.row][props.col];

    return (
        <div className={"flip-card-3D-wrapper"}>
            <div id={row_col} className={"flip-card"}>
                <div className={"flip-card-front"}>
                    <p>{displayValue}</p>
                </div>
                <div className={"flip-card-back"}>
                    <p>Back {displayValue}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
