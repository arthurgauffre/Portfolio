import { PinnedRepositoryData } from "./githubQuery";

export default function GitHubBox({ repo, index }:
    { repo: PinnedRepositoryData; index: number; }
) {
    return (
        <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-yellow-400 mt-2">⭐ {repo.stargazerCount} stars</p>
        </a>
    );
}
