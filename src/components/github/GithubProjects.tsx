"use client";

import { useState } from "react";
import GitHubBox from "./GithubBox";
import { PinnedRepositoryData } from "./githubQuery";
import ProjectDetailModal from "./ProjectDetailsModal";

export default function GithubProjects( { repositories }: { repositories: PinnedRepositoryData[] } ) {
    const [showModal, setShowModal] = useState(false);
    const [indexRepo, setIndexRepo] = useState(0);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Pinned Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
                {repositories.length > 0 ? (
                    repositories.map((repo: PinnedRepositoryData, index: number) => (
                        // <button onClick={() => { setIndexRepo(index); setShowModal(true); console.log(showModal) }} key={index}>
                        <GitHubBox repo={repo} index={index} key={index}/>
                        // </button>
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
            {showModal && (
                <ProjectDetailModal repo={repositories[indexRepo]} />
            )}
        </div>
    );
}