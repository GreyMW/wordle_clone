import {createContext} from "react";

let initialLetterGrid = Array(6).fill(Array(5).fill(""));
let initialColorGrid = Array(6).fill(Array(5).fill(""));

let initialFlipGrid = Array(6).fill(Array(5).fill(""));

    // [["","","","",""],
    // ["","","","",""],
    // ["","","","",""],
    // ["","","","",""],
    // ["","","","",""],
    // ["","","","",""]];

let initialKeyboardColors = Array(28).fill("");

const letterGridContext = createContext(initialLetterGrid);
const letterColorContext = createContext(initialColorGrid);
const keyboardColorContext =createContext(initialKeyboardColors);

export default initialLetterGrid;
export {letterGridContext, letterColorContext, initialColorGrid, keyboardColorContext, initialKeyboardColors};