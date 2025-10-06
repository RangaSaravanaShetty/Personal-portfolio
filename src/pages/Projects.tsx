import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Palette, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping experience with real-time inventory management and payment processing",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Design System",
      description: "Comprehensive component library used across 10+ products with full documentation",
      tech: ["React", "TypeScript", "Storybook", "Figma"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization with advanced filtering and export features for business intelligence",
      tech: ["Vue.js", "D3.js", "Python", "MongoDB"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with offline-first architecture and real-time sync",
      tech: ["React Native", "Redux", "Firebase"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "AI Content Generator",
      description: "ML-powered tool for creating marketing content at scale with multiple language support",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      description: "Collaborative project management with real-time updates and team collaboration features",
      tech: ["Next.js", "Prisma", "tRPC", "WebSockets"],
      icon: <Palette className="w-6 h-6" />
    },
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          whileHover={{ 
            y: -8, 
            rotateX: 5,
            rotateY: 5,
            boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="bg-card border-border h-full hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {project.icon}
                </div>
              </div>
              <CardTitle className="text-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="default" size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my best work, showcasing innovation and technical excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;