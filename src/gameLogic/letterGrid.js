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

const letterGridContext = createContext(initialLetterGrid);
const letterColorContext = createContext(initialColorGrid);

export default initialLetterGrid;
export {letterGridContext, letterColorContext, initialColorGrid};