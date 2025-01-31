"use client";
import MenuButton from "./MenuButton";

export default function Menu() {
    return (
        <div className="fixed h-screen md:w-[15%] w-[30%] place-content-center">
            <div className="flex flex-col">
                <MenuButton name="Home" redirect="/" />
                <MenuButton name="profil" redirect="/profil" />
                <MenuButton name="projects" redirect="/projects" />
                <MenuButton name="ressources" redirect="/ressources" />
            </div>
        </div>
    )
}