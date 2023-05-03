import './FlipCard.css';
import {useEffect} from "react";

function FlipCard(props) {
    const row_col = ""+props.row + props.col;
    return (

        <div className={"flip-card-3D-wrapper"}>
            <div id={"flip-card"} className={row_col}>
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