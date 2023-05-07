import "./GameOverModal.css";
import {resetGame} from "../../gameLogic/gameLogic";

function GameOverModal(props){

    // more of an html question, why does the \n not go to a new line?
    // let messageText = (props.isWinner ? "You're a winner! \n Play again?" : "Sorry you lost! \n Play again?");
    let messageText = (props.isWinner ? "You're a winner!" : "Sorry, you lost.");

    return (
        <dialog className={'game-over-modal'}>
            <div className={'game-over-container'}>
                <p>{messageText}</p>
            </div>
            <div className={'game-over-container'}>
                <button className={'replay-button'} onClick={()=>resetGame()}>Play Again!</button>
            </div>

        </dialog>
    )
}

export default GameOverModal;