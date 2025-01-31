import { PinnedRepositoryData } from "./githubQuery";

export default function ProjectDetailModal({ repo, setShowModal }:
    { repo: PinnedRepositoryData, setShowModal: (value: boolean) => void }
) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto shadow-xl relative">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    onClick={() => setShowModal(false)}
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold mb-4 text-white">{repo.name}</h2>
                <p className="text-lg mb-6 text-gray-300">{repo.description || "No description available"}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                        <span className="text-yellow-400 mr-2">⭐</span>
                        <span className="text-sm text-white">{repo.stargazerCount} Stars</span>
                    </div>
                    <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                        <span className="text-gray-300 mr-2">🍴</span>
                        <span className="text-sm text-white">{repo.forkCount} Forks</span>
                    </div>
                </div>

                <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-400">Primary Language:</span>
                    <div
                        className="inline-flex items-center px-3 py-1 rounded-full ml-2"
                        style={{ backgroundColor: `${repo.primaryLanguage.color}20` }}
                    >
                        <div
                            className="w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: repo.primaryLanguage.color }}
                        />
                        <span className="text-sm" style={{ color: repo.primaryLanguage.color }}>
                            {repo.primaryLanguage.name}
                        </span>
                    </div>
                </div>

                {repo.repositoryTopics.edges.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Topics:</h3>
                        <div className="flex flex-wrap gap-2">
                            {repo.repositoryTopics.edges.map((edge, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-700 text-sm rounded-full text-white"
                                >
                                    {edge.node.topic.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white group"
                >
                    View on GitHub
                    <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}