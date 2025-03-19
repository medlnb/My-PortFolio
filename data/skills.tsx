import { IoLogoGithub, IoLogoJavascript } from "react-icons/io5";
import {
  FaExternalLinkAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbFileTypeXml } from "react-icons/tb";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

interface skill {
    title: string;
    icon: JSX.Element;
  }
  
const skills: { type: string; data: skill[] }[] = [
{
    type: "Web",
    data: [
    {
        title: "React",
        icon: <FaReact />,
    },
    {
        title: "Next",

        icon: <SiNextdotjs />,
    },
    {
        title: "JavaScript",
        icon: <IoLogoJavascript />,
    },
    {
        title: "TypeScript",

        icon: <BiLogoTypescript />,
    },
    {
        title: "Css",
        icon: <IoLogoCss3 />,
    },
    {
        title: "TailWind",

        icon: <SiTailwindcss />,
    },
    {
        title: "Html",
        icon: <FaHtml5 />,
    },
    ],
},
{
    type: "Android",
    data: [
    {
        title: "Xml",
        icon: <TbFileTypeXml />,
    },
    {
        title: "Java",
        icon: <FaJava />,
    },
    ],
},
{
    type: "Data Base",
    data: [
    {
        title: "MySql",
        icon: <SiMysql />,
    },

    {
        title: "Mongodb",
        icon: <BiLogoMongodb />,
    },
    ],
},
{
    type: "others",
    data: [
    {
        title: "Python",
        icon: <FaPython />,
    },
    {
        title: "C",
        icon: <h1>C</h1>,
    },
    ],
},
];

export default skills;