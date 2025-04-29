
import { Badge } from "./ui/badge";

interface CertificationProps {
  title: string;
  provider: string;
  date: string;
  skills: string[];
}

const CertificationCard = ({ title, provider, date, skills }: CertificationProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600 mb-4">{provider}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="bg-purple-light text-purple-dark hover:bg-purple-light">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications & Courses</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <CertificationCard 
            title="Supervised Machine Learning"
            provider="Stanford Online"
            date="Feb 2025"
            skills={["Machine Learning", "Python", "Data Analysis", "Neural Networks"]}
          />
          
          <CertificationCard 
            title="Data Analyst Certification"
            provider="META"
            date="Dec 2024"
            skills={["Data Analysis", "SQL", "Tableau", "Statistical Methods"]}
          />
          
          <CertificationCard 
            title="IBM DevOps and Software Engineering"
            provider="IBM"
            date="Nov 2024"
            skills={["DevOps", "CI/CD", "Docker", "Git"]}
          />
          
          <CertificationCard 
            title="AI Programming with Python"
            provider="Udacity"
            date="Oct 2024"
            skills={["Python", "AI", "NumPy", "PyTorch"]}
          />
          
          <CertificationCard 
            title="Advanced SQL for Data Scientists"
            provider="DataCamp"
            date="Sep 2024"
            skills={["SQL", "Database Design", "Query Optimization", "Data Modeling"]}
          />
          
          <CertificationCard 
            title="Web Development Bootcamp"
            provider="Udemy"
            date="Aug 2024"
            skills={["HTML", "CSS", "JavaScript", "Responsive Design"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
