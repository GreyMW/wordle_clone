import {createContext} from "react";

let initialLetterGrid =
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

const letterGridContext = createContext(initialLetterGrid);

export default initialLetterGrid;
export {letterGridContext};