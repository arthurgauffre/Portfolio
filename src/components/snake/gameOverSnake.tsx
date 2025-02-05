export default function GameOverSnake({ gameOver, resetGame }: { gameOver: boolean; resetGame: () => void }) {
    return (
        <div>
            {gameOver && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-arcade-pink mb-4">GAME OVER</h2>
                    <button
                        onClick={resetGame}
                        className="bg-arcade-pink text-arcade-dark px-6 py-2 rounded 
                hover:bg-arcade-blue transition-colors border-2 border-arcade-blue"
                    >
                        NEW GAME
                    </button>
                </div>
            )}
        </div>
    );
}