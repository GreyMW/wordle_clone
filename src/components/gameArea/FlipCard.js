import './FlipCard.css';

function FlipCard(props) {
    const row_col = String(props.row) + String(props.col);
    return (

        <div className={"flip-card-3D-wrapper"}>
            <div id={row_col} className={"flip-card"}>
                <div className={"flip-card-front"}>
                    <p>{row_col}</p>
                </div>
                <div className={"flip-card-back"}>
                    <p>Back {row_col}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
