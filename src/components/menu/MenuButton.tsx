"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuButton({ name, redirect }: { name: string; redirect: string }) {
    const pathname = usePathname();
    const isActive = pathname === redirect;

    return (
        <Link
            className={`relative pixel-font p-4 m-2 border-2 transition-all duration-300 group
                ${isActive 
                    ? "border-[#00f3ff] bg-[#00f3ff]/10 glow-cyan" 
                    : "border-[#2b1a45] hover:border-[#ff38fd] hover:bg-[#ff38fd]/10"}
                `}
            href={redirect}
        >
            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-[#00f3ff]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-[#00f3ff]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-[#00f3ff]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-[#00f3ff]"></div>

            {/* Hover effect */}
            <div className={`absolute inset-0 pointer-events-none opacity-0 transition-opacity
                ${isActive ? "opacity-100" : "group-hover:opacity-50"}
                bg-gradient-to-r from-[#ff38fd]/30 to-[#00f3ff]/30`}>
            </div>

            {/* Text styling */}
            <span className={`text-lg tracking-wider transition-all
                ${isActive 
                    ? "text-[#00f3ff] drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]" 
                    : "text-[#6b5288] group-hover:text-[#ff38fd]"}
                `}>
                {isActive && "◉ "}{name}
                <span className="ml-2 text-[#00ff00]">{isActive && ">>"}</span>
            </span>

            {/* Active state indicator */}
            {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#00f3ff] animate-pulse"></div>
            )}
        </Link>
    );
}