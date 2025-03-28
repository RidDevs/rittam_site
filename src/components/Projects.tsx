
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-border/50 hover:border-primary/20 group">
      <div className="overflow-hidden h-48 relative">
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
          {githubUrl && (
            <Button size="sm" variant="secondary" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" variant="secondary" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-normal text-xs">
              {tech}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product management, cart functionality, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with real-time updates.",
      technologies: ["React", "Firebase", "Redux", "MaterialUI"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Financial Dashboard",
      description: "An interactive dashboard for visualizing and analyzing financial data with advanced filtering capabilities.",
      technologies: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Interested in seeing more of my work?</p>
            <Button asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
