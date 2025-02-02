"use client";
import { useState } from "react";
import MenuButton from "./MenuButton";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(true);

    const mail = process.env.NEXT_PUBLIC_MAIL_PRO;
    const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_LINK;
    const github = process.env.NEXT_PUBLIC_GITHUB_LINK;
    const phone = process.env.NEXT_PUBLIC_PHONE;

    return (
        <div className="fixed left-0 z-50 pixel-font">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute top-4 transition-all duration-500 ${
                    isOpen ? 'left-[240px]' : 'left-0'
                } bg-arcade-darkPurple text-arcade-blue p-2 rounded-r-full border-2 border-l-0 border-arcade-pink hover:bg-[#2b1a45] hover:text-arcade-pink z-50`}
            >
                {isOpen ? <span className="text-xl">«</span> : <span className="text-xl">»</span>}
            </button>

            <div className={`fixed h-screen transition-all duration-500 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="w-[240px] h-full bg-gradient-to-b from-arcade-darkGrey to-arcade-darkPurple border-r-4 border-arcade-pink relative flex flex-col">
                    {/* Pixel Corners */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-arcade-pink"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-arcade-pink"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-arcade-pink"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-arcade-pink"></div>

                    <div className="flex flex-col p-4 space-y-4 pt-16 flex-grow overflow-y-auto">
                        
                        <MenuButton name="Home" redirect="/" />
                        <MenuButton name="Profile" redirect="/profile" />
                        <MenuButton name="Projects" redirect="/projects" />
                        <MenuButton name="Ressources" redirect="/ressources" />

                        <div className="mt-8 border-t-2 border-[#3a2a55] pt-4">
                            <h3 className="text-arcade-pink text-sm mb-3">CONTACT PROTOCOLS</h3>
                            <div className="space-y-3">
                                <div className="text-arcade-blue text-sm">
                                    <span className="glow-cyan">{mail}</span>
                                </div>
                                <div className="text-arcade-blue text-sm">
                                    <span className="glow-cyan">{phone}</span>
                                </div>
                                <a
                                    href={linkedin || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors text-sm"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={github || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors text-sm"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="sticky bottom-0 w-full p-2 bg-arcade-darkPurple border-t-2 border-arcade-pink text-center text-sm text-arcade-blue">
                        [ SYSTEM MENU v1.4.2 ]
                    </div>
                </div>
            </div>
        </div>
    )
}