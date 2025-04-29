
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  timeline: string;
  points: string[];
}

const ProjectCard = ({ title, description, timeline, points }: ProjectProps) => {
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
      <div className="pt-2">
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
          />
          
          <ProjectCard 
            title="Personal Finance Tracker"
            timeline="Jul 2024"
            description="Designed and developed a web application to help users track and manage personal finances."
            points={[
              "Built using HTML, CSS, JavaScript, and local storage for data persistence",
              "Implemented data visualization with Chart.js",
              "Created intuitive UI for expense categorization",
              "Added budget planning and goal tracking features"
            ]}
          />
          
          <ProjectCard 
            title="Sentiment Analysis Tool"
            timeline="May 2024"
            description="Created an NLP-based tool to analyze sentiment in customer feedback and reviews."
            points={[
              "Used Python with NLTK and spaCy libraries",
              "Implemented both rule-based and machine learning approaches",
              "Achieved 82% accuracy in sentiment classification",
              "Developed a simple API interface for integration with other systems"
            ]}
          />
          
          <ProjectCard 
            title="Weather Data Visualization Dashboard"
            timeline="Mar 2024"
            description="Developed an interactive dashboard to visualize historical weather data and patterns."
            points={[
              "Built using Python's Dash framework",
              "Integrated with weather APIs for real-time data",
              "Implemented interactive maps and time-series graphs",
              "Added forecasting features using statistical models"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
