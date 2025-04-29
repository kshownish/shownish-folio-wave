
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  timeline: string;
  points: string[];
  githubLink?: string;
}

const ProjectCard = ({ title, description, timeline, points, githubLink }: ProjectProps) => {
  return (
    <div className="project-card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-purple-light flex items-center justify-center mt-1 mr-2 flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-purple"></div>
            </div>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
      <div className="pt-2 flex space-x-3">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm rounded-md border px-3 h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View on GitHub <ExternalLink size={14} className="ml-1" />
          </a>
        )}
        <Button variant="outline" size="sm" className="text-sm">
          View Project <ArrowRight size={14} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ProjectCard 
            title="Customer Segmentation with K-Means"
            timeline="Jan 2025"
            description="Developed a machine learning model to segment customers based on their purchasing behavior."
            points={[
              "Implemented K-Means clustering algorithm in Python",
              "Preprocessed and analyzed customer transaction data",
              "Identified 4 distinct customer segments with unique behaviors",
              "Created visualizations and dashboards to communicate findings"
            ]}
            githubLink="https://github.com/kshownish/customer-segmentation"
          />
          
          <ProjectCard 
            title="E-Commerce Sales Analysis"
            timeline="Nov 2024"
            description="Conducted comprehensive analysis of e-commerce sales data to identify trends and optimize marketing strategies."
            points={[
              "Created dashboards using Power BI",
              "Performed time-series analysis to identify seasonal trends",
              "Developed recommendation models for related products",
              "Improved conversion rates by 15% through data-driven insights"
            ]}
            githubLink="https://github.com/kshownish/Ecommerce_sales_Analysis"
          />
          
          <ProjectCard 
            title="Cinephile's Choice: Movie Recommendation System"
            timeline="Sep 2024"
            description="Built a content-based movie recommendation system using natural language processing techniques."
            points={[
              "Developed using Python, scikit-learn, and NLP libraries",
              "Implemented collaborative filtering and content-based approaches",
              "Used TF-IDF vectorization for movie descriptions analysis",
              "Achieved 87% user satisfaction rate in recommendation quality"
            ]}
            githubLink="https://github.com/kshownish/movie-recommendation-system"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
