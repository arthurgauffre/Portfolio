"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuButton({ name, redirect }: { name: string; redirect: string }) {
    const pathname = usePathname();
    const isActive = pathname === redirect;

    return (
        <Link
            className={`bg-black p-2 m-2 rounded text-center transition-all duration-300 ease-in-out md:hover:w-full text-white
                        ${isActive ? "w-full" : "w-[80%]"}`}
            href={redirect}
        >
            {name}
        </Link>
    );
}
