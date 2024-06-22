import React, { useState } from "react";
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];
let score = 0;
let aiscore = 0;
let webtitle = "Tic Tac Toe"


const ai = () => {
    const emptyCells = data.reduce((acc, val, index) => {
        if (val === "") acc.push(index);
        return acc;
    }, []);

    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const move = emptyCells[randomIndex];

    data[move] = "o";

    const box = document.getElementById(`box${move}`);
    if (box) {
        box.innerHTML = `<img src='${circle_icon}' alt='Circle'>`;
    }
};


const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        
        if (lock || data[num]) {
            return;
        } else {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setTimeout(ai(),3000)
            
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
                    webtitle = "You won..."
                    score += 1;
                } else if (data[a] === "o") {
                    webtitle = "You lost!"
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
        webtitle = "Tic Tac Toe"
    }

    return (
        <div>
            <div className='container'>
                <h1 className="title">{webtitle}<span></span></h1>
                <button className="score">You : {score}</button>
                <button className="score">AI : {aiscore}</button>
                <div className="board">
                    <div className="row1">
                        <div id="box0" className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                        <div id="box1" className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                        <div id="box2" className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className="row1">
                        <div id="box3" className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                        <div id="box4" className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                        <div id="box5" className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className="row1">
                        <div id="box6" className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                        <div id="box7" className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                        <div id="box8" className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>
                <button className="reset" onClick={resetGame}>Reset</button>
                <footer><h4 className="footer" font>HJRaptor 2024</h4></footer>
            </div>
        </div>
    );
}

export default TicTacToe;
