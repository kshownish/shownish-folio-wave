
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="skill-card">
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-purple-light text-purple-dark rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <SkillCard 
            title="Programming Languages"
            skills={["C", "Java", "Python", "JavaScript"]}
          />
          
          <SkillCard 
            title="Web Technologies"
            skills={["HTML", "CSS"]}
          />
          
          <SkillCard 
            title="Tools & Platforms"
            skills={["MySQL", "Docker", "Oracle", "Tableau", "Git", "Power BI", "Excel"]}
          />
          
          <SkillCard 
            title="Soft Skills"
            skills={["Project Management", "Adaptability", "Problem Solving", "Communication"]}
          />
          
          <SkillCard 
            title="Languages"
            skills={["English", "Telugu", "Hindi"]}
          />
          
          <SkillCard 
            title="Areas of Interest"
            skills={["Data Science", "Machine Learning", "AI", "Web Development"]}
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-navy mb-6">Technical Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Python</span>
                <span className="text-gray-500">Advanced</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[90%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Java</span>
                <span className="text-gray-500">Intermediate</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[75%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Data Analysis</span>
                <span className="text-gray-500">Advanced</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[85%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Machine Learning</span>
                <span className="text-gray-500">Intermediate</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[70%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">SQL</span>
                <span className="text-gray-500">Advanced</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[90%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Web Development</span>
                <span className="text-gray-500">Intermediate</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple rounded-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
