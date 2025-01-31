"use client";
import Link from "next/link";

export default function MenuButton({ name, redirect }: { name: string; redirect: string }) {
    return (
        <Link
            className="bg-blue-500 text-white p-2 m-2 md:w-3/4 sm:w-full rounded text-center transition-all duration-300 ease-in-out md:hover:w-full"
            href={redirect}
        >
            {name}
        </Link>
    );
}
