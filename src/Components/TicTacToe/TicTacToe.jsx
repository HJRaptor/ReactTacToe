import React, { useState } from "react";
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["","","","","","","","",""]

let score = 0

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock || data[num]) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
        }
        setCount(count + 1);
        checkWin();
    }

    const checkBoardFull = () =>{
        if (data[0] !== "" && data[1] !== "" && data[2] !== "" && data[3] !== "" && data[4] !== "" && data[5] !== "" && data[6] !== "" && data[7] !== "" && data[8] !== "" && data[9] !== ""){
            
        }
    }

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setLock(true);
                score +=1;
                return;
            }
        }
    }

    const resetGame = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setLock(false);
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = '');
    }

    return (
        <div>
            <div className='container'>
                <h1 className="title">Tic Tac Toe<span></span></h1>
                <button className="score">Score : {score}</button>
                <div className="board">
                    <div className="row1">
                        <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className="row1">
                        <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className="row1">
                        <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>
                <button className="reset" onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
}

export default TicTacToe;
