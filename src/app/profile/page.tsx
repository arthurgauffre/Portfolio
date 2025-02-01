"use client";
import { useState } from "react";

export default function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="w-full h-screen flex flex-row-reverse bg-[#0a0a0a] text-white pixel-font">
            {/* PDF Sidebar */}
            <div className={`h-full relative transition-all duration-500 ${isSidebarOpen ? 'w-1/3' : 'w-0'
                }`}>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`absolute top-4 z-50 p-2 bg-[#1a0a2b] border-2 border-[#ff38fd] rounded-full transition-all duration-300 ${isSidebarOpen ? 'left-4' : '-left-8'
                        }`}
                >
                    <span className="text-[#ff38fd] text-xl">
                        {isSidebarOpen ? '»' : '«'}
                    </span>
                </button>

                {isSidebarOpen && (
                    <div className="h-full p-4 border-l-4 border-[#ff38fd] relative">
                        {/* Pixel corners */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff38fd]"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-[#ff38fd]"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#ff38fd]"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#ff38fd]"></div>

                        <embed
                            src="/pdf/CV_ArthurGAUFFRE.pdf"
                            type="application/pdf"
                            className="w-full h-full bg-[#1a0a2b] rounded-lg"
                        />
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center text-4xl text-[#ff38fd] glow-pink">
                hello profil
            </div>
        </div>
    );
}