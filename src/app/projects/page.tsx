import { GetPinnedRepositories, PinnedRepositoryData } from "@/components/github/githubQuery";
import GitHubBox from "@/components/github/GithubBox";

export default async function Home() {
    const query = GetPinnedRepositories
    let repositories: PinnedRepositoryData[] = [];

    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const { data } = await response.json();
        repositories = data.viewer.pinnedItems.nodes;
    } catch (error) {
        console.error("Error fetching pinned repositories:", error);
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Pinned Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
                {repositories.length > 0 ? (
                    repositories.map((repo: PinnedRepositoryData, index: number) => (
                        console.log(repo),
                        <GitHubBox key={index} repo={repo} index={index} />
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
        </div>
    );
}
