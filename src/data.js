import { GiMountainCave } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { AiOutlineUserSwitch } from "react-icons/ai";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <GoHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <AiOutlineUserSwitch />,
  },
  {
    id: 3,
    url: "/hiking",
    text: "Hiking",
    icon: <IoLogoReact />,
  },
  {
    id: 4,
    url: "/coding",
    text: "Coding",
    icon: <GiMountainCave />,
  },
  {
    id: 5,
    url: "/TurkeyArticles",
    text: "Istanbul",
    icon: <FiSun />,
  },
];
