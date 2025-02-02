import { PinnedRepositoryData } from "./githubQuery";

export default function ProjectDetailModal({ repo, setShowModal }: { repo: PinnedRepositoryData, setShowModal: (value: boolean) => void }) {
    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 pixel-font">
            <div className="crt-overlay"></div>

            <div className="bg-[#0a0a0a] border-4 border-[#2b1a45] rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto relative shadow-[0_0_20px_5px_rgba(255,56,253,0.3)]">
                <div className="absolute top-2 left-2 w-2 h-2 bg-arcade-pink"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-arcade-pink"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-arcade-pink"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-arcade-pink"></div>

                <button
                    className="absolute top-2 right-2 text-arcade-pink hover:text-arcade-blue transition-colors text-2xl"
                    onClick={() => setShowModal(false)}
                >
                    [X]
                </button>

                <div className="mb-6 border-b-2 border-[#3a2a55] pb-4">
                    <h2 className="text-3xl text-arcade-blue drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
                        {repo.name}
                        <span className="text-arcade-pink ml-3 text-xl">v1.0</span>
                    </h2>
                    <p className="text-arcade-green mt-2 text-lg glow-green">
                        {repo.description || "CLASSIFIED DATA - ACCESS RESTRICTED"}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#1a0a2b] p-4 rounded border-2 border-[#3a2a55]">
                        <h3 className="text-[#ffd700] text-sm mb-2">STAR</h3>
                        <div className="flex items-center">
                            <span className="text-2xl text-[#ffd700] mr-2">★</span>
                            <span className="text-xl text-white">{repo.stargazerCount}</span>
                        </div>
                    </div>
                    <div className="bg-[#1a0a2b] p-4 rounded border-2 border-[#3a2a55]">
                        <h3 className="text-arcade-green text-sm mb-2">FORK</h3>
                        <div className="flex items-center">
                            <span className="text-2xl text-arcade-green mr-2">👥</span>
                            <span className="text-xl text-white">{repo.forkCount}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-6 bg-[#1a0a2b] p-4 rounded border-2 border-[#3a2a55]">
                    <h3 className="text-arcade-blue text-sm mb-2">PRIMARY LANGUAGE</h3>
                    <div className="flex items-center">
                        <div
                            className="w-4 h-4 rounded-full mr-3 shadow-[0_0_8px]"
                            style={{
                                backgroundColor: repo.primaryLanguage.color,
                                boxShadow: `0 0 8px ${repo.primaryLanguage.color}`
                            }}
                        />
                        <span
                            className="text-lg font-bold"
                            style={{ color: repo.primaryLanguage.color }}
                        >
                            {repo.primaryLanguage.name}
                        </span>
                    </div>
                </div>

                {repo.repositoryTopics.edges.length > 0 && (
                    <div className="mb-6 bg-[#1a0a2b] p-4 rounded border-2 border-[#3a2a55]">
                        <h3 className="text-arcade-pink text-sm mb-3">TOPICS</h3>
                        <div className="flex flex-wrap gap-2">
                            {repo.repositoryTopics.edges.map((edge, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm border-2 border-arcade-blue rounded-full text-arcade-blue bg-black/20"
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
                    className="w-full flex items-center justify-center bg-[#2b1a45] hover:bg-[#3a2a55] border-2 border-arcade-pink text-arcade-pink p-3 rounded-lg transition-all hover:scale-105 group"
                >
                    GITHUB LINK
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        ▶
                    </span>
                </a>
            </div>
        </div>
    );
}