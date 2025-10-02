"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Icons } from "@/styles/variables";

export default function Navbar() {
  const [openConfig, setOpenConfig] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 py-2 shadow-md bg-background text-foreground sticky top-0 z-50">
      {/* Izquierda  */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full cursor-pointer">
          <Icons.Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-1">
          <Icons.Youtube className="w-8 h-8 text-red-500" />
          <span className="text-xl font-bold">YouTube</span>
        </Link>
      </div>

      {/* Centro  */}
      <div className="flex items-center gap-2 w-1/2 max-w-lg">
        <div className="flex flex-1 items-center boder rounded-full overflow-hidden px-4 py-1 border-gray-200 dark:border-zinc-800">
          <input 
            type="text" 
            placeholder="Buscar" 
            className="flex-1 px-4 py-2 outline-none bg-transparent"
           />
           <button className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 cursor-pointer">
           <Icons.Search className="w-6 h-6 text-gray-300" />
           </button>
        </div>
        <button className="p-2 bg-gray-200 hover:bg-neutral-700 dark:bg-zinc-800 rounded-full cursor-pointer">
          <Icons.Mic className="w-6 h-6" />
        </button>
      </div>
      {/* Derecha */}
      <div className="flex items-center gap-4">
        <div className="relative">
           <button onClick={()=> setOpenConfig(!openConfig)} 
           className="p-2  rounded-full cursor-pointer"
           >
            <Icons.More className="w-5 h-5" />
           </button>
        </div>
      </div>
    </nav>
  );
}
