// importamos desde React-Iconos
import { MdVideoLibrary, MdHome, MdSubscriptions } from "react-icons/md";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi"; 
import { FaYoutube } from "react-icons/fa6";
import { LuCircleUserRound } from "react-icons/lu";

// Exportamos como objeto para mantener orden
export const Icons = {
    Menu: HiOutlineMenu,
    Search: FiSearch,
    More: FiMoreVertical,
    Mic: BiMicrophone,
    Home: MdHome,
    Youtube: FaYoutube,
    Library: MdVideoLibrary,
    Subscriptions: MdSubscriptions,
    Like: AiFillLike,
    Dislike: AiFillDislike,
    User: LuCircleUserRound
}