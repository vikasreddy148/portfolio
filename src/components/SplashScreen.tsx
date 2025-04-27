
import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="relative w-20 h-20 mb-8">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-primary animate-pulse"
        >
          <polygon points="0,0 100,0 50,86.6" />
        </svg>
      </div>
      <div className="font-mono text-primary text-xl relative">
        <span className="inline-block animate-fadeIn">V</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "150ms" }}>i</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "300ms" }}>k</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "450ms" }}>a</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "600ms" }}>s</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1200ms" }}> </span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1200ms" }}> </span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1350ms" }}>R</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1500ms" }}>e</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1650ms" }}>d</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1800ms" }}>d</span>
        <span className="inline-block animate-fadeIn" style={{ animationDelay: "1950ms" }}>y</span>
        
      </div>
      <div className="mt-16 w-24 h-1 bg-muted overflow-hidden">
        <div className="h-full bg-primary animate-progressBar"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
