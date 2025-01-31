"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons
import MenuButton from "./MenuButton";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(true); // State to toggle menu

    return (
        <div className={`flex h-screen md:w-[20%] w-[30%] ${isOpen ? 'relative' : 'fixed'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full z-50"
            >
                {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>
            <div className={`h-screen w-full place-content-center ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col">
                    <MenuButton name="Home" redirect="/" />
                    <MenuButton name="profil" redirect="/profil" />
                    <MenuButton name="projects" redirect="/projects" />
                    <MenuButton name="ressources" redirect="/ressources" />
                </div>
            </div>
        </div>
    )
}
