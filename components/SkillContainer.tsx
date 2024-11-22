interface skill {
  title: string;
  icon: JSX.Element;
}

const SkillContainer = ({
  skillData,
  title,
}: {
  skillData: skill[];
  title: string;
}) => {
  return (
    <div className="mb-2 border border-gray-600 rounded-md flex flex-wrap justify-center items-center p-4 gap-4 relative">
      {skillData.map((skill) => (
        <div key={skill.title} className="flex  gap-2">
          <div className="gap-2 flex flex-col items-center">
            <div className="text-3xl">{skill.icon}</div>
            <p>{skill.title}</p>
          </div>
        </div>
      ))}
      <p className="absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-3xl whitespace-nowrap -z-10 text-[#364051af]">
        {title}
      </p>
    </div>
  );
};

export default SkillContainer;
