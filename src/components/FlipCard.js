import './FlipCard.css';
import {useEffect} from "react";

function FlipCard() {
    return (

        <div className={"flip-card-3D-wrapper"}>
            <div id={"flip-card"}>
                <div className={"flip-card-front"}>
                    <p>F</p>

                </div>
                <div className={"flip-card-back"}>
                    <p>B</p>

                </div>
            </div>
        </div>
    )
}

function flip(event) {
    // console.log(event.code);
    // console.log(event);
    if (event.code === 'Enter') {
        console.log('Enter pressed');
        document.getElementById('flip-card').classList.toggle('do-flip');
    }
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