import './FlipCard.css';
import {useEffect} from "react";

function FlipCard() {
    return (

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

function flip(event) {
    console.log(event.key)
}

const useEnterHook = () => {
    useEffect(() => {
        window.addEventListener('keydown', flip);

        return () => {
            window.removeEventListener('keydown', flip);
        }
    }, [])


}
export default FlipCard;
export {flip, useEnterHook};