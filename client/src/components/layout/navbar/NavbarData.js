import { AiFillHome, AiFillInfoCircle, AiFillContacts } from "react-icons/ai";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdWidgets } from "react-icons/md";
import { BiNews } from "react-icons/bi";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <AiFillInfoCircle />,
  },
  {
    title: "Advertise With Us",
    path: "/advertise-with-us",
    icon: <RiAdvertisementFill />,
  },
  {
    title: "website widget",
    path: "/widget",
    icon: <MdWidgets />,
  },
  {
    title: "Tech news",
    path: "/tech-news",
    icon: <BiNews />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiFillContacts />,
  },
];
