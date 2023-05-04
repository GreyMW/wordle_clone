import {createContext} from "react";

let initialLetterGrid =
    [["a","b","c","d","e"],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

const letterGridContext = createContext(initialLetterGrid);

export default initialLetterGrid;
export {letterGridContext};