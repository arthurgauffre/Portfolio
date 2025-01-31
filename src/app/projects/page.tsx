import { GetPinnedRepositories, PinnedRepositoryData } from "@/components/github/githubQuery";
import GithubProjects from "@/components/github/GithubProjects";

export default async function Home() {
    let repositories: PinnedRepositoryData[] = [];

    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            body: JSON.stringify({ query: GetPinnedRepositories }),
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
        <GithubProjects repositories={repositories} />
    );
}
