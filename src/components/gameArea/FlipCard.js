import './FlipCard.css';
import {useContext} from "react";
import {letterGridContext, letterColorContext} from "../../gameLogic/letterGrid";


function FlipCard(props) {
    const row_col = String(props.row) + String(props.col);
    const gridValue = useContext(letterGridContext);
    const color = useContext(letterColorContext);

    const displayValue = gridValue[props.row][props.col];
    let displayColor = " letter-color-" + color[props.row][props.col];

    return (
        <div className={"flip-card-3D-wrapper"}>
            <div id={row_col} className={"flip-card"+ displayColor}>
                <div className={"flip-card-front"+ displayColor}>
                    <p>{displayValue}</p>
                </div>
                <div className={"flip-card-back"+ displayColor}>
                    <p>Back {displayValue}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
