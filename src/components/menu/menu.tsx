"use client";
import { useState } from "react";
import MenuButton from "./menuButton";
import ContactsMenu from "./contactsMenu";
import MenuCloseButton from "./menuCloseButton";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed left-0 z-50 pixel-font">
            <MenuCloseButton isOpen={isOpen} setIsOpen={setIsOpen} />

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

                        <ContactsMenu />
                    </div>

                    <div className="sticky bottom-0 w-full p-2 bg-arcade-darkPurple border-t-2 border-arcade-pink text-center text-sm text-arcade-blue">
                        [ MENU ]
                    </div>
                </div>
            </div>
        </div>
    )
}