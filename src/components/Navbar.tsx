"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Icons } from "@/styles/variables";

export default function Navbar() {
  const [openConfig, setOpenConfig] = useState(false);
  const [search, setSearch] = useState("");
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
          <span className="text-xl tracking-tight font-oswald"
            style={{ fontFamily: "var(--font-oswald)" }}>YouTube</span>
          
          <span className="text-[10px] text-gray-400 relative -top-2">CO</span>  
        </Link>
      </div>

      {/* Centro  */}
      <div className="flex items-center flex-1 justify-center">
        <div className="flex items-center w-full max-w-xl">
          <input 
            type="text" 
            placeholder="Buscar"
            onChange={(e) =>setSearch(e.target.value)}
            className="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full outline-none focus:border-blue-500 placeholder-gray-400"
           />
           <button className="px-5 py-2 bg-[#222222] border border-[#303030] border-l-0 rounded-r-full hover:bg-[#303030] cursor-pointer">
           <Icons.Search className="w-6 h-6 text-gray-300" />
           </button>
        </div>
        <button className="ml-3 p-2 bg-gray-200 hover:bg-[#303030] dark:bg-zinc-800 rounded-full cursor-pointer">
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
           {openConfig && (
            <div className="absolute right-0 mt-2 w-56 bg-background shadow-lg rounded-lg overflow-hidden">
              <button onClick={() => setTheme("l")} className="">
                Tus datos en Youtube
              </button>
              <button onClick={() => setTheme("l")} className="">
                Aspecto
              </button>
            </div>
           )}
        </div>
        <button className=" flex p-2 bg-gray-200 hover:bg-zinc-800 dark:bg-neutral-950 rounded-full cursor-pointer">
          <Icons.User className="w-6 h-6" />Acceder
        </button>

      </div>
    </nav>
  );
}
