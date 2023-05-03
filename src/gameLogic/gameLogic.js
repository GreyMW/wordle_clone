import {useEffect} from "react";

let gameState = {
    row: 0,
    col: 0,
    max_row: 4,
    max_col: 5,
    guess: "",
    answer: "spice",
}
const useKeyboardListener = () => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyboardEvent);

        return () => {
            window.removeEventListener('keydown', handleKeyboardEvent);
        }
    }, [])
}



function handleKeyboardEvent(event){

    let [isLetter, isEnter,isBackspace ] = validateInput(event);

    if (isLetter) {
        handleLetter(event.key.toUpperCase());
        return;
    }

    if (isEnter) {
        handleEnter();
        return;
    }

    if (isBackspace) {
        handleBackspace();
    }

}

function handleLetter(key) {
    if (gameState.guess.length < gameState.max_row + 1) {
        gameState.guess += key;
        updateLetters();
        console.log("Added the letter to guess: " + gameState.guess);
    }
}

function handleEnter() {
    //TODO
    if (gameState.guess.length !== 5) {
        console.log("Not enough letters");
        return;
    }

    console.log("Word submitted");
    submitWord();
}

function handleBackspace() {
    if (gameState.guess.length > 0) {
        gameState.guess = gameState.guess.slice(0,gameState.guess.length-1);
        console.log("Removed a letter from guess: " + gameState.guess);
        updateLetters();
    }
}

function updateLetters() {
    //TODO
}

function setAnswer() {
    //TODO
}

function submitWord() {
    //TODO
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