export function Projects() {
    const projects = [
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" },
    ];
  
    return (
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <figure key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  alt={project.title}
                  className="object-cover w-full h-60"
                  height={300}
                  src={`https://via.placeholder.com/400x300?text=${project.title}`}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-black rounded-md hover:border-black">View Project</button>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  