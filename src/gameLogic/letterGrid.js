import {createContext} from "react";

let initialLetterGrid =
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

let initialColorGrid =
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

let initialKeyboardColors = Array(28).fill("");

const letterGridContext = createContext(initialLetterGrid);
const letterColorContext = createContext(initialColorGrid);
const keyboardColorContext =createContext(initialKeyboardColors);

export default initialLetterGrid;
export {letterGridContext, letterColorContext, initialColorGrid, keyboardColorContext, initialKeyboardColors};