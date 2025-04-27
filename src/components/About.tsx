const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Vikas, a passionate web developer dedicated to creating
              exceptional digital experiences. Currently, I'm pursuing my B.Tech
              in Computer Science, where I continue to sharpen my skills in
              frontend and backend development.
            </p>
            <p>
              My journey in web development started during my academic years
              when I first discovered the power of building websites. Since
              then, I've worked on various projects, focusing on creating
              responsive, user-friendly, and dynamic web applications. Along the
              way, I also explored technologies like React, JavaScript, and
              Laravel, which strengthened my love for building scalable
              platforms.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {[
                "JavaScript (ES6+)",

                "React",
                "Node.js",
                "HTML5",
                "Bootstrap",
                "MongoDB",
                "Express",
                "Redux",
                "TailwindCSS",
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-primary/75">
              <img
                src="/images/profille.jpeg"
                alt="Vikas Reddy"
                className="w-full h-full object-cover mix-blend-multiply hover:filter-none transition-all duration-300"
              />
              {/* Removed the green border div */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
