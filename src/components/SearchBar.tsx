"use client";
import { useTheme } from "next-themes"; 
import {  useState } from "react";
import { Icons } from "@/styles/variables";


export default function SearchBar (){
    const { setTheme } = useTheme();
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  return (
    <div className="relative flex items-center">
        {/* 🔍 Buscador visible solo en tablet y desktop */}
      <div className="hidden sm:flex items-center bg-background rounded-full overflow-hidden border border-zinc-700 
                      w-64 lg:w-96 transition-all duration-300">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-zinc-400 focus:outline-none"
        />
        <button className="px-4 text-zinc-400 hover:text-white">
          <Icons.Search size={20} />
        </button>
        </div>

        {/* Icono lupa visible en mobile */}
        <button className="sm:hidden text-foreground hover:text-white"
        onClick={() => setIsMobileSearchOpen(true)}
        >
          <Icons.Search size={22} />
        </button>
        {/* Modal Movil de búsqueda */}
        {isMobileSearchOpen && (
          <div className="fixed inset-0 bg-white dark:bg-background z-50 flex flex-col items-center justify-start 
          px-3 pt-3 animate-slideDown"
          >

          </div>
        )}
    </div>
  )
}
