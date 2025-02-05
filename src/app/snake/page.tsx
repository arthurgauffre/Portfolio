"use client";
import DisplayScoreSnake from "@/components/snake/displayScoreSnake";
import DisplaySnake from "@/components/snake/displaySnake";
import GameOverSnake from "@/components/snake/gameOverSnake";
import GameRulesSnake from "@/components/snake/gameRulesSnake";
import { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

export default function Snake() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const generateFood = useCallback(() => {
        const newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
        setFood(newFood);
    }, []);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        generateFood();
        setGameOver(false);
        setScore(0);
    };

    const checkCollision = (head: { x: number; y: number }) => {
        return (
            head.x < 0 ||
            head.x >= GRID_SIZE ||
            head.y < 0 ||
            head.y >= GRID_SIZE ||
            snake.some((segment, index) =>
                index !== 0 && segment.x === head.x && segment.y === head.y
            )
        );
    };

    const gameLoop = useCallback(() => {
        if (gameOver) return;

        const newSnake = [...snake];
        const head = {
            x: newSnake[0].x + direction.x,
            y: newSnake[0].y + direction.y
        };

        if (checkCollision(head)) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            setScore(prev => prev + 10);
            generateFood();
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }, [snake, direction, food, gameOver, generateFood]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y !== 1) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y !== -1) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x !== 1) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x !== -1) setDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        const interval = setInterval(gameLoop, 150);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(interval);
        };
    }, [direction, gameLoop]);

    return (
        <div className="w-full h-screen bg-arcade-darkPurple flex flex-col items-center justify-center pixel-font">
            <div className="relative border-4 border-arcade-pink rounded-lg p-4">
                <h1 className="text-3xl text-arcade-pink glow-pink mb-4 text-center">
                    CYBER SNAKE
                </h1>

                <DisplayScoreSnake score={score} />

                <DisplaySnake snake={snake} food={food} GRID_SIZE={GRID_SIZE} />

                <GameOverSnake gameOver={gameOver} resetGame={resetGame} />

                <GameRulesSnake />
            </div>
        </div>
    );
}