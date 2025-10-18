"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes"; 
import Link from "next/link";
import { Icons } from "@/styles/variables";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { set } from "react-hook-form";

export default function Navbar() {
  const [openConfig, setOpenConfig] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const { setTheme } = useTheme();

  const menuRef = useRef<HTMLDivElement>(null);

  //Detectar Click por fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>{
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenConfig(false);
        setOpenTheme(false);
      }
    };
    if (openConfig || openTheme) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    //Limpiar el listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openConfig, openTheme]);

  return (
    <nav className="flex items-center justify-between p-3 md: p-4 py-2 shadow-md bg-white dark:bg-background text-foreground sticky top-0 z-50 shadow-md">
      {/* Izquierda  */}
      <div className="flex items-center gap-3 md:gap-4">
        <button className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full cursor-pointer">
          <Icons.Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-1">
          <Image 
          src="/Logo/LogoYoutube.png"
          alt="Youtube Logo"
          width={32}
          height={32}
          />
          <span className="text-xl tracking-tight font-oswald"
            style={{ fontFamily: "var(--font-oswald)" }}>YouTube</span>
          
          <span className="text-[10px] text-gray-400 relative -top-2">CO</span>  
        </Link>
      </div>

      {/* Centro  */}
      <div className="flex items-center flex-1 justify-center">
        <SearchBar />
        
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-3">
        <div className="relative" ref={menuRef}>
           <button onClick={()=> setOpenConfig(!openConfig)} 
           className="p-2  rounded-full cursor-pointer"
           >
            <Icons.More className="w-5 h-5" />
           </button>
           {/* Menu de configuración */}
           {openConfig && (
            <div className="absolute right-0 top-12 w-70 bg-[#282828] text-sm rounded-xl shadow-xl overflow-hidden z-50 border border-[#3f3f3f] py-2">
              {!openTheme ? (
                <>
                 <MenuItem 
                    icon={<Icons.UserLine className="w-5 h-5" />} 
                    text="Tus datos en YouTube"
                 />
                 <MenuItem 
                    icon={<Icons.Moon className="w-5 h-5" />}
                    text="Aspecto: Tema del dispositivo"
                    action={() => setOpenTheme(true)}
                    hasArrow
                 />
                 <div>
                 <MenuItem icon={<Icons.idioma className="w-5 h-5"/>} text="Idioma: Español latinoamericano" />
                 <MenuItem icon={<Icons.keyboard className="w-5 h-5" />} text="Modo restringido: desactivado" />
                <MenuItem icon={<Icons.Globe className="w-5 h-5"/>} text="Ubicación: Colombia" />
                <MenuItem icon={<Icons.teclado className="w-5 h-5"/>} text="Combinaciones de teclas" />

                 </div>
                 <div className="my-2 space-y-[1px]">
                   <div className="border-t border-[#3f3f3f]" />
                 </div>
                <MenuItem icon={<Icons.Settings className="w-5 h-5"/>} text="Configuración" />
                <div className="my-2 space-y-[1px]">
                  <div className="border-t border-[#3f3f3f]" />
                </div>
                <MenuItem icon={<Icons.HelpCircle className="w-5 h-5"/>} text="Ayuda" />
                <MenuItem icon={<Icons.MessageWearning className="w-5 h-5"/>} text="Enviar comentarios" />
                </>
              ): (
                <>
                 <div className="flex items-center px-4 py-3 border-b border-[#3f3f3f] cursor-pointer">
                  <button onClick={() => setOpenTheme(false)}
                    className="mr-2 p-1 hover:bg-[#3a3a3a] rounded-full"
                    >
                      <Icons.ChevronLeft size={18} className="cursor-pointer"/>
                  </button>
                  <span className="font-medium ">Aspecto</span>
                 </div>
                 <MenuItem 
                    text="Usar tema del dispositivo"
                    action={() => setTheme("system")}
                 />
                <MenuItem 
                    text="Tema claro" action={() => setTheme("light")}
                />
                <MenuItem 
                    text="Tema oscuro" action={() => setTheme("dark")}
                />
                </>
              )}
            </div>
           )}
        </div>
        <button className="flex items-center gap-1 px-3 py-[6px] border border-[#3f3f3f] rounded-full text-sm hover:bg-[#272727] hover:border-transparent transition cursor-pointer">
          <Icons.User className="w-6 h-6" />Acceder
        </button>

      </div>
    </nav>
  );
}

function MenuItem({
  icon, 
  text, 
  action, 
  hasArrow,
}:{
  icon?: React.ReactNode;
  text: string;
  action?: () => void;
  hasArrow?: boolean;
}) {
  return (
    <button 
    onClick={action} 
    className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#3a3a3a] text-left cursor-pointer transition-colors duration-150"
    >
      <div className="flex items-center gap-3">
      {icon && <span className="text-gray-300">{icon}</span>}
      <span>{text}</span>
      </div>
      {hasArrow && <Icons.ChevronRight className="w-4 h-4 text-gray-400" />}
    </button>
  );
}
