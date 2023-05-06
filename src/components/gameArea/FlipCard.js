import './FlipCard.css';
import {useContext} from "react";
import {letterGridContext, letterColorContext} from "../../gameLogic/stateGrids";


function FlipCard(props) {
    const row_col = String(props.row) + String(props.col);
    const gridValue = useContext(letterGridContext);
    const color = useContext(letterColorContext);

    const displayValue = gridValue[props.row][props.col];
    let displayColor = " letter-color-" + color[props.row][props.col];
    let flipped = "" + (color[props.row][props.col] === "" ? "" : " flipped" )

    //https://css-tricks.com/different-approaches-for-creating-a-staggered-animation/
    //I don't understand how he is injecting this vss variable from the classname into his css
    // let animation_order = " --animation-order: " + props.col+";";

    return (
        <div className={"flip-card-3D-wrapper"}>
            <div id={row_col} className={"flip-card"+ displayColor + flipped}>
                <div className={"flip-card-front"}>
                    <p>{displayValue}</p>
                </div>
                <div className={"flip-card-back"+ displayColor}>
                    <p>{displayValue}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
