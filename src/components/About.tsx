
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-gray-600 mb-4">
              I am Parachikapu Kshownish, a Computer Science and Engineering undergraduate at Lovely Professional University, passionate about leveraging technology to solve real-world problems.
            </p>
            <p className="text-gray-600 mb-4">
              My academic journey has been marked by a deep interest in data science, artificial intelligence, and web technologies. I consistently strive to expand my knowledge and skills through practical projects, courses, and industry experience.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond technical skills, I value continuous learning, collaboration, and effective communication. I believe these qualities are essential for creating innovative solutions that address genuine user needs in an ever-evolving technological landscape.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-2">Education</h3>
              <div className="pl-4 border-l-2 border-purple">
                <p className="font-medium">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-600">Lovely Professional University</p>
                <p className="text-gray-500 text-sm">2023 - 2027 (Expected)</p>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center" asChild>
              <a href="#contact">
                <span>Get In Touch</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-navy mb-3">My Focus Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-purple"></div>
                  </div>
                  <span>Data Science & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-purple"></div>
                  </div>
                  <span>Artificial Intelligence & NLP</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-purple"></div>
                  </div>
                  <span>Web Development & UI Design</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-purple"></div>
                  </div>
                  <span>Database Management & SQL</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-navy mb-3">Languages I Speak</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-500 text-sm">Professional</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-full bg-purple rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Telugu</span>
                    <span className="text-gray-500 text-sm">Native</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-full bg-purple rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Hindi</span>
                    <span className="text-gray-500 text-sm">Conversational</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-full bg-purple rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
