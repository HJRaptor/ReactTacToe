import React, { useState } from "react";
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];
let score = 0;
let aiscore = 0;

const ai = (e) => {
    let moved = false;
    while (!moved) {
        let move = Math.floor(Math.random() * 9);
        if (data[move] !== "") {
            continue;
        } else {
            data[move] = "o";
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            moved = true;
        }
    }
}

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        
        if (lock || data[num]) {
            return;
        } else {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            ai(e);
        }
        setCount(count + 1);
        checkWin();
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
                if (data[a] === "x") {
                    score += 1;
                } else if (data[a] === "o") {
                    aiscore += 1;
                }
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
                <button className="score">You : {score}</button>
                <button className="score">AI : {aiscore}</button>
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
