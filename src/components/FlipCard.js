import './FlipCard.css';

function FlipCard() {
    return (
        // <div className={'flip-card-3D-wrapper'}>
        //     <div id={'flip-card'}>
        //         <div className={'flip-card-front'}>
        //             <p>Front</p>
        //             <button id="flip-card-btn-turn-to-back">flip</button>
        //         </div>
        //         <div className={'flip-card-back'}>
        //             <p>Back</p>
        //             <button id="flip-card-btn-turn-to-front">flip</button>
        //         </div>
        //     </div>
        // </div>
        <div className={"flip-card-3D-wrapper"}>
            <div id={"flip-card"}>
                <div className={"flip-card-front"}>
                    <p>F</p>
                    <button id={"flip-card-btn-turn-to-back"}>flip</button>

                </div>
                <div className={"flip-card-back"}>
                    <p>B</p>
                    <button id={"flip-card-btn-turn-to-front"}>flip</button>

                </div>
            </div>
        </div>
    )
}

export default FlipCard;