import React, { useState, useEffect, useRef } from "react";
import "./Snake.css";

const BOARD_SIZE = 10;
const INITIAL_SNAKE = [[0, 0]];
const INITIAL_DIRECTION = [0, 1];

function getRandomFoodPosition(snake) {
  let newFood;
  do {
    newFood = [
      Math.floor(Math.random() * BOARD_SIZE),
      Math.floor(Math.random() * BOARD_SIZE),
    ];
  } while (
    snake.some(
      (segment) => segment[0] === newFood[0] && segment[1] === newFood[1]
    )
  );
  return newFood;
}

function Snake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(getRandomFoodPosition(INITIAL_SNAKE));
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  const moveSnake = () => {
    const newHead = [snake[0][0] + direction[0], snake[0][1] + direction[1]];

    // Check wall collision
    if (
      newHead[0] < 0 ||
      newHead[0] >= BOARD_SIZE ||
      newHead[1] < 0 ||
      newHead[1] >= BOARD_SIZE ||
      snake.some(
        (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
      )
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const newSnake = [newHead, ...snake];

    // Check food collision
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomFoodPosition(newSnake));
      setScore(score + 1);
    } else {
      newSnake.pop(); // Remove tail
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(intervalRef.current);
  });

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        return setDirection([-1, 0]);
      case "ArrowDown":
        return setDirection([1, 0]);
      case "ArrowLeft":
        return setDirection([0, -1]);
      case "ArrowRight":
        return setDirection([0, 1]);
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomFoodPosition(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    intervalRef.current = setInterval(moveSnake, 200);
  };

  return (
    <div className="game-container">
      <h1>🐍 Snake Game</h1>
      <p>Score: {score}</p>
      {gameOver && (
        <div className="game-over">
          Game Over! <button onClick={restartGame}>Restart</button>
        </div>
      )}
      <div className="board">
        {Array.from({ length: BOARD_SIZE }).map((_, row) =>
          Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isSnake = snake.some(
              (segment) => segment[0] === row && segment[1] === col
            );
            const isFood = food[0] === row && food[1] === col;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? "snake" : ""} ${
                  isFood ? "food" : ""
                }`}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Snake;
