import {useEffect} from "react";

const useKeyboardListener = () => {
    useEffect(() => {
        window.addEventListener('keydown', flip);

        return () => {
            window.removeEventListener('keydown', flip);
        }
    }, [])
}

function flip(event) {
    // console.log(event.code);
    // console.log(event);
    if (event.code === 'Enter') {
        console.log('Enter pressed');
        document.getElementById('01').classList.toggle('do-flip');
    }
}

export {flip, useKeyboardListener};