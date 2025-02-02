"use client";
import { useState } from "react";

export default function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="w-full h-screen flex flex-row-reverse bg-[#0a0a0a] text-white pixel-font">
            {/* PDF Sidebar */}
            <div className={`h-full relative transition-all duration-500 ${
                isSidebarOpen ? 'w-1/3' : 'w-0'
            }`}>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`absolute top-4 transition-all duration-500 ${
                        isSidebarOpen ? 'left-[-28]' : 'right-0'
                    } bg-[#1a0a2b] text-arcade-blue p-2 rounded-l-full border-2 border-r-0 border-arcade-pink hover:bg-[#2b1a45] hover:text-arcade-pink z-50`}
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
                            className="w-full h-full bg-[#1a0a2b] rounded-lg"
                        />
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center text-4xl text-arcade-pink glow-pink">
                hello profil
            </div>
        </div>
    );
}