import { PinnedRepositoryData } from "./githubQuery";

export default function GitHubBox({ repo, index }: { repo: PinnedRepositoryData; index: number; }) {
    return (
        <div className="relative bg-arcade-darkGrey p-4 rounded-lg border-4 border-[#2b1a45] hover:border-arcade-pink transition-all group pixel-font">
            <div className="absolute top-2 left-2 w-2 h-2 bg-arcade-pink"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-arcade-pink"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-arcade-pink"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-arcade-pink"></div>

            <div className="absolute top-0 right-0 bg-[#2b1a45] px-2 py-1 text-sm text-arcade-blue">
                #{String(index + 1).padStart(2, '0')}
            </div>

            <h2 className="text-2xl text-arcade-blue mb-4 drop-shadow-[0_0_4px_rgba(0,243,255,0.7)]">
                {repo.name}
            </h2>

            <div className="flex justify-between items-center bg-arcade-darkPurple p-2 rounded-md border-2 border-[#3a2a55]">
                <div className="text-center">
                    <p className="text-[#ffd700] text-sm">STAR</p>
                    <div className="flex items-center">
                        <span className="text-[#ffd700] mr-1">★</span>
                        <span className="text-white">{repo.stargazerCount}</span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-arcade-green text-sm">FORK</p>
                    <div className="flex items-center">
                        <span className="text-arcade-green mr-1">👥</span>
                        <span className="text-white">{repo.forkCount}</span>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_5px_rgba(255,56,253,0.5)]"></div>
        </div>
    );
}