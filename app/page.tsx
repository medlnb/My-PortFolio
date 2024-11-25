import WhoIs from "@components/WhoIs";
import Image from "next/image";
import selfpic from "@assets/selfpic.png";
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
import SkillContainer from "@components/SkillContainer";
import { Suspense } from "react";
import Projects from "@components/Projects";
import Link from "next/link";
import Email from "@components/Email";

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

const loader = (
  <div className="bg-white text-center text-black rounded-md p-4 relative overflow-hidden transition duration-200 hover:bg-black hover:text-white hover:outline hover:outline-1 ">
    <div className="text-content relative z-10">
      <h1 className="loading--background rounded-md w-32 mx-auto h-5"></h1>
      <h1 className="loading--background rounded-md w-52 my-2 mx-auto h-5"></h1>
      <div className="text-gray-600 text-xs my-4">
        <h1 className="loading--background rounded-md  my-1 mx-auto h-4"></h1>
        <h1 className="loading--background rounded-md  my-1 mx-auto h-4"></h1>
        <h1 className="loading--background rounded-md w-36 my-1 h-4"></h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        <IoLogoGithub />
        <FaExternalLinkAlt />
      </div>
    </div>
  </div>
);

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/medlnb",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mohamed-lanabi-5a977327b/",
  },
  {
    icon: <FaFacebookF />,
    link: "https://web.facebook.com/The.Winter.Ssoldier/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/thewintersoldier070/",
  },
];

function Page() {
  return (
    <main>
      <div className="flex md:flex-row flex-col justify-evenly px-2 py-16 gap-10  lg:p-32 ">
        <WhoIs />
        <Image className="w-72 mx-auto" alt="user picture" src={selfpic} />
      </div>
      <div className="max-w-[50rem] mx-auto">
        <section>
          <h1 className="text-xl md:text-2xl font-medium mb-6 text-center md:text-start">
            __About me
          </h1>
          <p className="px-4 md:text-base text-sm">
            Hello! I am Lanabi Mohamed, a versatile full stack developer
            proficient in front-end and back-end technologies,delivering
            scalable web applications with expertise in JavaScript/TypeScript,
            Python, React and JavaFx.<br></br>
            <br></br>
            As a front-end developer with four years of coding experience,I have
            traversed a diverse technological landscape.<br></br>
            <br></br>
            My journey began with Python, honing my problem-solving skills and
            logical thinking, then delved into C and Java, mastering the
            intricacies of object-oriented programming with java.<br></br>
            <br></br>
            Today, I find myself proficiently crafting captivating user
            interfaces using HTML, CSS, and JavaScript, with React as my primary
            framework.
            <br></br>
            <br></br>
            This enriching progression has molded me into a versatile developer
            capable of blending creativity with technical expertise, ensuring I
            deliver seamless and engaging experiences for users across the
            digital realm.<br></br>
            <br></br>
          </p>
        </section>

        <section className="my-20">
          <h1 className="text-xl md:text-2xl font-medium my-10 text-center md:text-start">
            __4 Years of Skill Mastery
          </h1>
          <div className="px-4">
            {skills.map((skill) => (
              <SkillContainer
                key={skill.type}
                title={skill.type}
                skillData={skill.data}
              />
            ))}
          </div>
        </section>

        <h1 className="text-xl md:text-2xl font-medium my-10 text-center md:text-start">
          __Using The Skills on Top You Can Make These
        </h1>
        <Suspense fallback={loader}>
          <div className="px-4">
            <Projects limit={2} />
          </div>
        </Suspense>

        <div className="flex">
          <Link
            href="/myworks"
            className="mt-1 px-4 ml-auto text-gray-400 hover:text-white text-sm underline"
          >
            See More...
          </Link>
        </div>
      </div>
      <div className="my-10 flex justify-center items-center gap-6 flex-wrap">
        {socials.map((social) => (
          <Link
            key={social.link}
            href={social.link}
            target="_blank"
            className="text-2xl hover:scale-110 hover:px-2 duration-150"
          >
            {social.icon}
          </Link>
        ))}
        <Email />
      </div>
    </main>
  );
}

export default Page;
