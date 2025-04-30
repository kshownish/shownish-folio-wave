
import { Button } from './ui/button';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple shadow-lg">
            <img 
              src="/lovable-uploads/caebf1c9-1a11-45e6-86c6-73bf0a035959.png" 
              alt="Kshownish Parachikapu" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-purple font-medium mb-3 animate-slide-in">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 animate-slide-in">
              Parachikapu Kshownish
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Computer Science Undergraduate
            </h3>
            <p className="text-gray-600 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Passionate about Data Science, Artificial Intelligence, and Web Technologies. Currently pursuing Computer Science and Engineering at Lovely Professional University, with a focus on building innovative solutions using modern technologies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="flex items-center">
                <a 
                  href="https://drive.google.com/file/d/1spVF22pZU6gxxyLArb5lrgxb7phkINJY/view?usp=drive_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://www.linkedin.com/in/kshownish-parachikapu-bb1b16214/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/kshownish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple transition-colors"
              >
                <Github size={20} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://leetcode.com/u/Kshownish/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
