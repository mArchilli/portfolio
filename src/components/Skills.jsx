import SkillCard from './ui/SkillCard';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming languages",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "PHP", level: 85 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", level: 75 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap CSS", level: 90 },
        { name: "Laravel", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 50 },
        { name: "Firebase", level: 60 },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black" id='skills'>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Skills;
