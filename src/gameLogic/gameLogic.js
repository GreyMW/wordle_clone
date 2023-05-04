import {useEffect} from "react";
import initialLetterGrid from "./letterGrid";
import words from "./wordSelection";

let gameState = {
    row: 0,
    col: 0,
    max_row: 5,
    max_col: 4,
    guess: "",
    answer: "SPICE",
    letterGrid: initialLetterGrid,
    playable: true,
    wordList: words
}

// const useKeyboardListener = (state) => {
function useKeyboardListener(setGridState) {
    useEffect(() => {

        function keyEventListener(e) {
            handleKeyboardEvent(e, setGridState)
        }

        window.addEventListener('keydown', keyEventListener);

        return () => {
            window.removeEventListener('keydown', keyEventListener);
        }
    }, [])
}

function handleKeyboardEvent(event, setGridState){
    if (!gameState.playable) {
        return;
    }

    let [isLetter, isEnter,isBackspace ] = validateInput(event);

    if (isLetter) {
        handleLetter(event.key.toUpperCase(), setGridState);
        return;
    }

    if (isEnter) {
        handleEnter();
        return;
    }

    if (isBackspace) {
        handleBackspace(setGridState);
    }

}

function handleLetter(key, setGridState) {
    if (gameState.guess.length < gameState.max_col + 1) {
        gameState.guess += key;
        updateLetters(setGridState);
        console.log("Added the letter to guess: " + gameState.guess);
    }
}

function handleEnter() {

    if (gameState.guess.length !== 5) {
        console.log("Not enough letters");
        return;
    }

    console.log("Word submitted");
    submitWord();
}

function handleBackspace(setGridState) {
    if (gameState.guess.length > 0) {
        gameState.guess = gameState.guess.slice(0,gameState.guess.length-1);
        console.log("Removed a letter from guess: " + gameState.guess);
        updateLetters(setGridState);
    }
}

function updateLetters(setGridState) {

    const guessWithPadding = (gameState.guess + "     ").slice(0,5);

    //spread the letters into an array
    let asArray = [];
    for (let i in guessWithPadding) {
        asArray.push(guessWithPadding[i]);
    }

    gameState.letterGrid[gameState.row] = asArray;
    //the React app will not re-render if it is not supplied a new array
    //as if the values in the old array were just updated then it's still the same array but with new values.
    let newState = structuredClone(gameState.letterGrid);

    setGridState(newState);

}

// function setAnswer() {
// }

function submitWord() {
    if (gameState.guess === gameState.answer) {
        console.log("You win!");
        gameState.playable = false;
        //TODO: function to handle winning
        return;
    }

    if (gameState.row === gameState.max_row) {
        console.log("You lose!");
        gameState.playable = false;
        //TODO: function to handle losing
        return;
    }
    gameState.guess = "";
    gameState.row += 1;

}


function validateInput(event){
    const isLetter = event.key.length === 1 && event.key.match(/[a-zA-Z]/i) != null;
    const isEnter = event.code === 'Enter';
    const isBackspace = event.code === 'Backspace';
    return [isLetter, isEnter, isBackspace]
}

function flip(event) {
    // console.log(event.code);
    // console.log(event);
    const elementId = String(gameState.row) + String(gameState.col);
    if (event.code === 'Enter') {
        console.log('Enter pressed');
        gameState.col += 1;
        document.getElementById(elementId).classList.toggle('do-flip');
    }
}

export {flip, useKeyboardListener};