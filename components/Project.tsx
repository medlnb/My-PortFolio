import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface ProjectType {
  _id: string;
  title: string;
  utils_data: string[];
  description: string;
  demo?: string;
  repository?: string;
  img: string;
  presentation: string[];
  index: number;
}

function Project({
  title,
  utils_data,
  description,
  demo,
  repository,
  img,
  index,
}: ProjectType) {
  return (
    <div className="bg-white text-center text-black rounded-md p-4 relative overflow-hidden transition duration-200 hover:bg-black hover:text-white hover:outline hover:outline-1">
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1">
          <h1 className="text-lg">{title}</h1>
          <h2 className="flex justify-center gap-2">
            {utils_data.map((util) => (
              <p className="text-sm" key={util}>
                {util}
              </p>
            ))}
          </h2>
          <p className="text-gray-600 text-xs my-4">{description}</p>
        </div>
        <footer className="flex justify-center items-center gap-6">
          {repository && (
            <Link href={repository} target="_blank">
              <IoLogoGithub />
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank">
              <FaExternalLinkAlt />
            </Link>
          )}
        </footer>
      </div>
      <img
        src={img}
        className={` absolute w-36 object-cover transition top-0 z-0 opacity-50 ${
          index % 2 === 0 ? "-left-10 -rotate-12" : "rotate-12 -right-10"
        }`}
      />
    </div>
  );
}

export default Project;
