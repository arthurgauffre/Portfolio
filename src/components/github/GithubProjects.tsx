"use client";

import { useState } from "react";
import GitHubBox from "./GithubBox";
import { PinnedRepositoryData } from "./githubQuery";
import ProjectDetailModal from "./ProjectDetailsModal";

export default function GithubProjects({ repositories }: { repositories: PinnedRepositoryData[] }) {
    const [showModal, setShowModal] = useState(false);
    const [indexRepo, setIndexRepo] = useState(0);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] pixel-font relative overflow-hidden">
            <div className="crt-overlay"></div>
            
            <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat animate-grid-scroll"></div>
            </div>

            <div className="relative">
                <h1 className="text-4xl text-[#00f3ff] mb-8 text-center drop-shadow-[0_0_12px_rgba(0,243,255,0.5)]">
                    <span className="text-[#ff38fd]">ARCADE</span> TERMINAL
                    <div className="text-sm mt-2 text-[#00ff00]">SELECT YOUR MISSION</div>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
                    {repositories.length > 0 ? (
                        repositories.map((repo: PinnedRepositoryData, index: number) => (
                            <button 
                                onClick={() => { 
                                    setIndexRepo(index); 
                                    setShowModal(true);
                                }} 
                                key={index}
                                className="hover:scale-105 transition-transform duration-300 group"
                            >
                                <GitHubBox repo={repo} index={index} />
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_25px_5px_rgba(255,56,253,0.3)]"></div>
                            </button>
                        ))
                    ) : (
                        <div className="col-span-3 text-center p-8 border-4 border-[#ff38fd] rounded-lg animate-pulse">
                            <p className="text-xl text-[#00f3ff]">INITIALIZING PROTOCOL...</p>
                            <p className="text-sm text-[#ff38fd] mt-2">(SYSTEM_CALL: AWAITING_REPOSITORIES)</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Terminal Footer */}
            <div className="absolute bottom-0 w-full py-3 bg-[#1a0a2b] border-t-4 border-[#ff38fd] text-center text-sm text-[#00f3ff]">
                [ SYSTEM READY | COSMIC_ENGINE v2.4.1 | CONNECTED TO GITHUB_API ]
            </div>

            {showModal && (
                <ProjectDetailModal repo={repositories[indexRepo]} setShowModal={setShowModal} />
            )}
        </div>
    );
}