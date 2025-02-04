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
                    ? "border-arcade-blue bg-arcade-blue/10 glow-cyan" 
                    : "border-[#2b1a45] hover:border-arcade-pink hover:bg-arcade-pink/10"}
                `}
            href={redirect}
        >
            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-arcade-blue"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-arcade-blue"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-arcade-blue"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-arcade-blue"></div>

            {/* Hover effect */}
            <div className={`absolute inset-0 pointer-events-none opacity-0 transition-opacity
                ${isActive ? "opacity-100" : "group-hover:opacity-50"}
                bg-gradient-to-r from-arcade-pink/30 to-arcade-blue/30`}>
            </div>

            {/* Text styling */}
            <span className={`text-lg tracking-wider transition-all
                ${isActive 
                    ? "text-arcade-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]" 
                    : "text-arcade-purple group-hover:text-arcade-pink"}
                `}>
                {isActive && "◉ "}{name}
                <span className="ml-2 text-arcade-green">{isActive && ">>"}</span>
            </span>

            {/* Active state indicator */}
            {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-arcade-blue animate-pulse"></div>
            )}
        </Link>
    );
}