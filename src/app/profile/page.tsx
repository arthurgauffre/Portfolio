"use client";
import { useState } from "react";
import profileConfig from "../../config/profilConfig.json";

export default function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="w-full h-screen flex flex-row-reverse bg-arcade-darkGrey text-white pixel-font">
            {/* PDF Sidebar */}
            <div className={`h-full relative transition-all duration-500 ${
                isSidebarOpen ? 'w-1/3' : 'w-0'
            }`}>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`absolute top-4 transition-all duration-500 ${
                        isSidebarOpen ? 'left-[-28]' : 'right-0'
                    } bg-arcade-darkPurple text-arcade-blue p-2 rounded-l-full border-2 border-r-0 border-arcade-pink hover:bg-[#2b1a45] hover:text-arcade-pink z-50`}
                >
                    {isSidebarOpen ? (
                        <span className="text-xl">»</span>
                    ) : (
                        <span className="text-xl">«</span>
                    )}
                </button>

                {isSidebarOpen && (
                    <div className="h-full p-4 border-l-4 border-arcade-pink relative">
                        {/* Pixel corners */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-arcade-pink"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-arcade-pink"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-arcade-pink"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-arcade-pink"></div>

                        <embed 
                            src="/pdf/CV_ArthurGAUFFRE.pdf" 
                            type="application/pdf"
                            className="w-full h-full bg-arcade-darkPurple rounded-lg"
                        />
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto">
                <div className="max-w-4xl w-full space-y-8">
                    {/* Header Section */}
                    <div className="border-b-2 border-arcade-pink pb-4 mb-8">
                        <h1 className="text-4xl text-arcade-pink glow-pink mb-2">
                            {profileConfig.name}
                        </h1>
                        <p className="text-arcade-blue text-xl">{profileConfig.title}</p>
                    </div>

                    {/* Bio Section */}
                    <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
                        <h2 className="text-2xl text-arcade-pink mb-4">PROFILE SUMMARY</h2>
                        <p className="text-arcade-blue leading-relaxed">
                            {profileConfig.bio}
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
                        <h2 className="text-2xl text-arcade-pink mb-4">SKILLS</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {profileConfig.skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center text-arcade-blue p-2 border border-arcade-pink rounded"
                                >
                                    <div className="w-2 h-2 bg-arcade-pink mr-2"></div>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
                        <h2 className="text-2xl text-arcade-pink mb-4">LINKS</h2>
                        <div className="flex flex-col space-y-3">
                            <a
                                href={profileConfig.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href={profileConfig.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}