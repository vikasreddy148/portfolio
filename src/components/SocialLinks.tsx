
import { Github, Instagram, Twitter, Linkedin,} from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="https://github.com/vikasreddy148" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://instagram.com/vikas.redddy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://twitter.com/Vikas1005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/k-vikas-reddy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <div className="w-[1px] h-24 bg-primary/30 mt-4"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
