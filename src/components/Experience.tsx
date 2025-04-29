
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10">
          <div className="max-w-3xl">
            <div className="relative pl-8 pb-12 border-l-2 border-purple">
              {/* Position indicator */}
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-purple"></div>
              
              {/* Content */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-navy">Freelance AI Trainer</h3>
                  <div>
                    <span className="px-3 py-1 bg-purple-light text-purple-dark rounded-full text-sm">
                      Oct 2024 - Feb 2025
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium mb-2">Outlier AI</p>
                
                <p className="text-gray-600 mb-4">
                  Contributed to the improvement of AI models through data evaluation, prompt engineering, and quality assessment.
                </p>
                
                <h4 className="text-lg font-medium text-navy mb-2">Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-purple"></div>
                    </div>
                    <span className="text-gray-600">
                      Evaluated and refined AI-generated responses for accuracy, relevance, and naturalness
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-purple"></div>
                    </div>
                    <span className="text-gray-600">
                      Developed and optimized prompts to enhance AI model performance across various domains
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-purple"></div>
                    </div>
                    <span className="text-gray-600">
                      Contributed to improving content quality through systematic assessment and feedback
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-purple"></div>
                    </div>
                    <span className="text-gray-600">
                      Maintained an average rating of 4.5+ for quality and consistency of evaluations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-gray-300">
              {/* Position indicator */}
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-gray-300"></div>
              
              {/* Content */}
              <div className="py-4">
                <p className="text-gray-500 italic">
                  More experiences coming soon as I continue my academic and professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
