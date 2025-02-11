import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';


export function Projects() {
  const projects = [
    { id: 1, title: "Project 1", url: "https://social-network-five-taupe.vercel.app/#/", src: project1Img, description: "A social network application.", technologies: ["Vue3", "Firebase"] },
    { id: 2, title: "Project 2", url: "https://tascalafundicion.vercel.app/", src: project2Img, description: "An e-commerce platform.", technologies: ["React", "Node.js"] },
    { id: 3, title: "Project 3", url: "/project-3", description: "A personal blog.", technologies: ["Gatsby", "GraphQL"] },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a href={project.url} key={project.id} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
              <figure>
                <img
                  alt={project.title}
                  className="object-cover w-full h-60"
                  height={300}
                  src={project.src}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-black text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}