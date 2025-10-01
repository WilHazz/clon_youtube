"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi"; 

export default function Navbar() {
  const [openConfig, setOpenConfig] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 py-2 shadow-md bg-background text-foreground sticky top-0 z-50">
      {/* Izquierda  */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
          <HiOutlineMenu className="w-6 h-6" />
        </button>
        <span className="text-xl font-bold">YouTube</span>
      </div>
    </nav>
  );
}
