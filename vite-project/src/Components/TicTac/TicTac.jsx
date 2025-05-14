import React, { useState } from "react";
import "./TicTac.css";
const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isRedTurn, setIsRedTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal from top-left
    [2, 4, 6], // diagonal from top-right
  ];
  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // returns "red" or "green"
      }
    }
    return null;
  };

  const ticTacHandler = (index) => {
    if (board[index] !== null || winner) return;

    const newBoard = [...board];
    newBoard[index] = isRedTurn ? "red" : "green";
    setBoard(newBoard);

    const winnerColor = checkWinner(newBoard);
    if (winnerColor) {
      setWinner(winnerColor);
    } else {
      setIsRedTurn(!isRedTurn);
    }
  };

  const resetHandler = () => {
    setBoard(Array(9).fill(null));
    setIsRedTurn(true);
    setWinner(null);
  };
  return (
    <div className="grid-container">
      {board.map((cell, index) => (
        <div
          key={index}
          onClick={() => ticTacHandler(index)}
          className="grid-cell"
          style={{ backgroundColor: cell }}
        ></div>
      ))}
      {winner && (
        <h2 style={{ textAlign: "center" }}>{winner.toUpperCase()} wins!</h2>
      )}

      <button
        onClick={resetHandler}
        style={{ display: "block", margin: "20px auto" }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTac;
