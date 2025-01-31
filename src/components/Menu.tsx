"use client";
import MenuButton from "./MenuButton";

export default function Menu() {
    return (
        <div className="h-screen md:w-[15%] w-[25%] place-content-center">
            <div className="flex flex-col">
                <MenuButton name="Home" redirect="/" />
                <MenuButton name="profil" redirect="/profil" />
            </div>
        </div>
    )
}