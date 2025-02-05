export default function DisplayScoreSnake({ score }: { score: number }) {
    return (
        <div className="mb-4 text-arcade-blue text-center">
            SCORE: <span className="text-arcade-pink">{score}</span>
        </div>
    );
}