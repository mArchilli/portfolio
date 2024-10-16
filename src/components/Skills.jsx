export function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Vue.js", "PHP", "Laravel", "Git", "GitHub", "Illustrator", "Photoshop"];
  
    return (
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center p-4 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer transform transition-transform duration-300 hover:scale-110"
              >
                <span className="font-medium text-black">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  