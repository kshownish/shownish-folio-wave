
import { Badge } from "./ui/badge";

interface CertificationProps {
  title: string;
  provider: string;
  date: string;
  skills: string[];
  link: string;
}

const CertificationCard = ({ title, provider, date, skills, link }: CertificationProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-semibold text-navy hover:text-blue-600 transition-colors"
        >
          {title}
        </a>
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
            link="https://coursera.org/share/593df17ab75055ed6692f3dca1ca31ab"
          />
          
          <CertificationCard 
            title="Introduction to Data Analytics"
            provider="META"
            date="Dec 2024"
            skills={["Data Analysis", "SQL", "Tableau", "Statistical Methods"]}
            link="https://www.coursera.org/account/accomplishments/verify/X2L482Z41J3N?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
          />
          
          <CertificationCard 
            title="Data Analysis with Spreadsheets and SQL"
            provider="IBM"
            date="Nov 2024"
            skills={["SQL", "Spreadsheets", "Data Analysis", "Databases"]}
            link="https://coursera.org/share/077e88ff5f2eceaae364d88104bb9f1c"
          />
          
          <CertificationCard 
            title="IBM DevOps and Software Engineering"
            provider="IBM"
            date="Oct 2024"
            skills={["DevOps", "CI/CD", "Docker", "Git"]}
            link="https://coursera.org/share/27d529ec80067faf045137442c38b736"
          />
          
          <CertificationCard 
            title="Introduction to GenAI"
            provider="DeepLearning.AI"
            date="Sep 2024"
            skills={["AI", "Generative AI", "LLMs", "Machine Learning"]}
            link="https://coursera.org/share/fa3026fc12eec0f9f6819822f19c538a"
          />
          
          <CertificationCard 
            title="Web Development Bootcamp"
            provider="Udemy"
            date="Aug 2024"
            skills={["HTML", "CSS", "JavaScript", "Responsive Design"]}
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
