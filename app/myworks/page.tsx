import Projects from "@components/Projects";
import { Suspense } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

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

function Page() {
  return (
    <div className="mt-6 lg:p-8 lg:px-32 px-4 p-2 text-xs lg:text-base">
      <h1 className="text-center text-3xl font-medium my-10">My Projects</h1>
      <Suspense fallback={loader}>
        <Projects />
      </Suspense>
    </div>
  );
}

export default Page;
