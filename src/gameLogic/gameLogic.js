import {useEffect} from "react";
import initialLetterGrid, {initialColorGrid, initialKeyboardColors, allOrderedKeys} from "./stateGrids";
import words from "./wordSelection";

let gameState = {
    row: 0,
    col: 0,
    max_row: 5,
    max_col: 4,
    guess: "",
    answer: "",
    letterGrid: initialLetterGrid,
    colorGrid: initialColorGrid,
    keyboardColors: initialKeyboardColors,
    playable: true,
}

setAnswer();

// const useKeyboardListener = (state) => {
function useKeyboardListener(setGridState, setColorGrid, setKeyboardColorGrid) {
    useEffect(() => {

        function keyEventListener(e) {
            handleKeyboardEvent(e, setGridState, setColorGrid, setKeyboardColorGrid)
        }

        window.addEventListener('keydown', keyEventListener);

        return () => {
            window.removeEventListener('keydown', keyEventListener);
        }
    }, [])
}

function handleKeyboardEvent(event, setGridState, setColorGrid, setKeyboardColorGrid){
    if (!gameState.playable) {
        return;
    }

    let [isLetter, isEnter,isBackspace ] = validateInput(event);

    if (isLetter) {
        handleLetter(event.key.toUpperCase(), setGridState);
        return;
    }

    if (isEnter) {
        handleEnter(setColorGrid, setKeyboardColorGrid);
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

function handleEnter(setColorGrid, setKeyboardColorGrid) {

    if (gameState.guess.length !== 5) {
        //TODO: row wiggle and popup when not enough letters
        console.log("Not enough letters");
        return;
    }

    console.log("Word submitted");
    submitWord(setColorGrid, setKeyboardColorGrid);
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

function setAnswer() {
    let randomNum = Math.round(Math.random() * words.length);
    console.log("Answer: " + words[randomNum].toUpperCase());
    gameState.answer = words[randomNum].toUpperCase();
}

function submitWord(setColorGrid, setKeyboardColorGrid) {

    updateGridColor(setColorGrid);
    updateKeyboardColor(setKeyboardColorGrid);

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

function updateGridColor(setColorGrid){
    let newState = structuredClone(gameState.colorGrid);

    gameState.colorGrid[gameState.row] = gameState.colorGrid[gameState.row].map(() => "grey");
    newState[gameState.row] = newState[gameState.row].map(() => "grey");

    let answerCorrectLettersRemoved = gameState.answer;
    let guessCorrectLettersRemoved = gameState.guess;

    for (let index in gameState.guess) {
        if (gameState.guess[index] === gameState.answer[index]) {
            gameState.colorGrid[gameState.row][index] = "green";
            newState[gameState.row][index] = "green";
            answerCorrectLettersRemoved = setCharAt(answerCorrectLettersRemoved,Number(index),"+");
            guessCorrectLettersRemoved = setCharAt(guessCorrectLettersRemoved,Number(index),"-");
        }
    }

    let answerSet = new Set(answerCorrectLettersRemoved);
    for (let index in guessCorrectLettersRemoved) {
        if (answerSet.has(guessCorrectLettersRemoved[index])) {
            answerCorrectLettersRemoved = answerCorrectLettersRemoved.replace(guessCorrectLettersRemoved[index], "+");
            answerSet = new Set(answerCorrectLettersRemoved);
            gameState.colorGrid[gameState.row][index] = "yellow";
            newState[gameState.row][index] = "yellow";
            setColorGrid(newState);
        }
    }

    // animation delay, couldn't figure this out in css
    // can't figure it out here either, get some weird bugs
    // function animationDelay(col, col_max) {
    //     newState[gameState.row][col] = gameState.colorGrid[gameState.row][col];
    //     setColorGrid(newState);
    //     console.log("delay working: " + col);
    //     if (col !== col_max){
    //         setTimeout(() => animationDelay(col+1, col_max), 1000);
    //     }
    // }
    // animationDelay(0,gameState.max_col);

    setColorGrid(newState);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function updateKeyboardColor(setKeyboardColorGrid){

    let newState = structuredClone(gameState.keyboardColors);

    let answerSet = new Set(gameState.answer);

    for (let index in gameState.guess) {

        if (gameState.guess[index] === gameState.answer[index]){
            let charIndex = allOrderedKeys.findIndex((x) => x === gameState.guess[Number(index)].toLowerCase());
            newState[charIndex] = "green";
            continue;
        }

        if (answerSet.has(gameState.guess[index])){
            let charIndex = allOrderedKeys.findIndex((x) => x === gameState.guess[Number(index)].toLowerCase());
            newState[charIndex] = "yellow";
            continue;
        }
        let charIndex = allOrderedKeys.findIndex((x) => x === gameState.guess[Number(index)].toLowerCase());
        newState[charIndex] = "grey";
    }
    gameState.keyboardColors = newState;
    setKeyboardColorGrid(newState);
}

function validateInput(event){
    const isLetter = event.key.length === 1 && event.key.match(/[a-zA-Z]/i) != null;
    const isEnter = event.code === 'Enter';
    const isBackspace = event.code === 'Backspace';
    return [isLetter, isEnter, isBackspace]
}

export {useKeyboardListener};