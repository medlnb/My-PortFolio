import Project from "@components/Project";

interface ProjectType {
  _id: string;
  title: string;
  utils_data: string[];
  description: string;
  demo?: string;
  repository?: string;
  img: string;
  presentation: string[];
}

async function Projects({ limit }: { limit?: number }) {
  const res = await fetch(
    `${process.env.Url}/api/project${limit ? `?limit=${limit}` : ""}`
  );
  if (!res.ok) return <p>Error Fetching Projects</p>;
  const ProjectsData: ProjectType[] = await res.json();

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ProjectsData.map((project, index) => (
        <Project key={project._id} {...{ ...project, index }} />
      ))}
    </div>
  );
}

export default Projects;
