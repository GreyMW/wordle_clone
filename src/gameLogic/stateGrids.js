import {createContext} from "react";

let initialLetterGrid = Array(6).fill(Array(5).fill(""));

let initialColorGrid = Array(6).fill(Array(5).fill(""));

let initialKeyboardColors = Array(28).fill("");

const letterGridContext = createContext(initialLetterGrid);

const letterColorContext = createContext(initialColorGrid);

const keyboardColorContext =createContext(initialKeyboardColors);

let rowOneKeys = ['q','w','e','r','t','y','u','i','o','p'];
let rowTwoKeys = ['a','s','d','f','g','h','j','k','l'];
let rowThreeKeys = ['enter', 'z','x','c','v','b','n','m','backspace'];
let allOrderedKeys = rowOneKeys.concat(rowTwoKeys).concat(rowThreeKeys);

export default initialLetterGrid;
export {letterGridContext, letterColorContext, initialColorGrid, keyboardColorContext, initialKeyboardColors,
    allOrderedKeys, rowOneKeys, rowTwoKeys, rowThreeKeys};