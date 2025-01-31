import { GET_PINNED_REPOSITORIES } from "@/components/github/githubQuery";

export default async function Home() {
    const query = GET_PINNED_REPOSITORIES

    let repositories = [];

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
                    repositories.map((repo, index) => (
                        <a
                            key={index}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                        >fixed
                            <h2 className="text-xl font-semibold">{repo.name}</h2>
                            <p className="text-sm opacity-80">{repo.description || "No description"}</p>
                            <p className="text-yellow-400 mt-2">⭐ {repo.stargazerCount} stars</p>
                        </a>
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
        </div>
    );
}
