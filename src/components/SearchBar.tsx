"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Icons } from "@/styles/variables";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setTheme } = useTheme();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-center w-full ">
      {/* 🔍 Buscador visible solo en tablet y desktop */}
      <div className="hidden sm:flex items-center w-full max-w-2xl">
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full outline-none focus:border-blue-500 placeholder-gray-400"
        />
        <button className="px-5 py-2 bg-[#222222] border border-[#303030] border-l-0 rounded-r-full hover:bg-[#303030] cursor-pointer">
          <Icons.Search className="w-6 h-6 text-gray-300" />
        </button>
      </div>
      <button className="hidden sm:flex ml-3 p-2 bg-gray-200 hover:bg-[#303030] dark:bg-zinc-800 rounded-full cursor-pointer">
        <Icons.Mic className="w-6 h-6" />
      </button>

      {/* Icono lupa visible en mobile */}
      <button
        className="sm:hidden text-foreground hover:text-white"
        onClick={() => setIsMobileSearchOpen(true)}
      >
        <Icons.Search size={22} />
      </button>
      {/* Modal Movil de búsqueda */}
      {isMobileSearchOpen && (
        <div
          className="fixed inset-0 bg-white dark:bg-background z-50 flex flex-col items-center justify-start 
          px-3 pt-3 animate-slideDown"
        >
          <div className="flex items-center w-full gap-2">
            {/* Flecha para regresar */}
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="text-foreground hover:text-white"
            >
              <Icons.back size={22} />
            </button>
            {/* Input de busqueda */}
            <div className="flex items-center flex-1 bg-[#121212] rounded-full border border-[#303030] overflow-hidden">
              <input
                type="text"
                placeholder="Buscar"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full outline-none focus:border-blue-500 placeholder-gray-400 focus:outline-none"
              />
              <button className="px-5 py-2 bg-[#222222] border border-[#303030] border-l-0 rounded-r-full hover:bg-[#303030] cursor-pointer">
                <Icons.Search className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
