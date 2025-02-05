import React from 'react';

interface SnakeSegment {
    x: number;
    y: number;
}

interface Food {
    x: number;
    y: number;
}


export default function DisplaySnake({ snake, food, GRID_SIZE }: { snake: SnakeSegment[]; food: Food, GRID_SIZE: number }) {
    return (
        <div
            className="grid gap-px bg-arcade-darkPurple border-2 border-arcade-blue"
            style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                width: "400px",
                height: "400px"
            }}
        >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                const isFood = food.x === x && food.y === y;

                return (
                    <div
                        key={index}
                        className={`${isSnake ? 'bg-arcade-pink' : ''} 
                  ${isFood ? 'bg-arcade-blue' : ''}
                  ${!isSnake && !isFood ? 'bg-arcade-dark' : ''}`}
                    />
                );
            })}
        </div>
    );
}