import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    title: "Rent-A-Car",
    description:
      "A responsive web app for renting cars, featuring dark/light mode, animated UI transitions with Framer Motion, and a mobile-optimized collapsible sidebar for smooth navigation. Built using React.js, Tailwind CSS, Context API, and React Router.",
    tags: ["React", "Redux", "Javascript", "HTML5", "CSS"],
    links: {
      github: "https://github.com/vikasreddy148/Rent-A-Car",
      external: "https://vikasreddy148.github.io/Rent-A-Car/",
    },
    image: "/images/projects/rent-a-car.jpg",
  },
  {
    title: "WanderLust",
    description:
      "A dynamic, responsive web application for discovering and booking travel packages, built using modern web technologies.",
    tags: ["React", "HTML", "CSS", "Javascript", "NodeJs"],
    links: {
      github: "https://github.com/vikasreddy148/wanderlust-adventures-platform",
      external: "https://wanderlust-adventures-platform.lovable.app/",
    },
    image: "/images/projects/wanderlust.jpg",
  },
];

const Featured = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">03.</span> Some Things I've Built
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative aspect-video bg-card rounded-lg overflow-hidden group ${
                  index % 2 === 0 ? "" : "md:order-last"
                }`}
              >
                <a
                  href={project.links.external || project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold">Go to Project</span>
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className="md:col-span-5">
                <p className="font-mono text-primary mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm font-mono mb-4 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {project.tags.map((tag, i) => (
                    <li key={i} className="text-primary">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
