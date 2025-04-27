import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = titleRef.current?.textContent || "";
    if (titleRef.current) {
      titleRef.current.textContent = "";
      let index = 0;

      const typeText = () => {
        if (titleRef.current && index < text.length) {
          titleRef.current.textContent += text[index];
          index++;
          setTimeout(typeText, 100);
        }
      };

      setTimeout(typeText, 500);
    }
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-left">
        <p className="font-mono text-primary mb-4 fade-in">Hi, my name is</p>
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
        >
          Vikas Reddy.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 fade-in">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-lg mb-12 fade-in leading-relaxed">
          I'm a Web Developer with a strong foundation in Frontend and Backend
          Development. Skilled in building responsive websites, dynamic web
          applications, and user-focused digital platforms. Continuously
          improving my problem-solving skills through coding challenges and
          real-world projects. Passionate about creating clean, scalable, and
          impactful solutions.
        </p>
        <a
          href="#work"
          className="inline-block bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
        >
          View My Work
        </a>
        <a
          href="https://drive.google.com/file/d/1rAj57M5CaZ4tis2wcFqj-zesIUGhWDAU/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
