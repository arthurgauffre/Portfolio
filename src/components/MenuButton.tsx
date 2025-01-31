"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuButton({ name, redirect }: { name: string; redirect: string }) {
    const pathname = usePathname();
    const isActive = pathname === redirect;

    return (
        <Link
            className={`bg-black p-2 m-2 sm:w-full rounded text-center transition-all duration-300 ease-in-out md:hover:w-full text-white
                        ${isActive ? "w-full" : "md:w-3/4"}`}
            href={redirect}
        >
            {name}
        </Link>
    );
}
