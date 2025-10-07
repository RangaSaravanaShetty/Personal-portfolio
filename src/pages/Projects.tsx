import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Palette, Rocket, BriefcaseMedical, Footprints, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
  type Project = {
    title: string;
    description: string;
    tech: string[];
    icon: JSX.Element;
    liveUrl?: string;
    codeUrl?: string;
  };

  const projects: Project[] = [
    {
      title: "Design of a Flightcontroller for VTOL UAV",
      description: "Developing a custom flight control system for a VTOL UAV with hover, cruise, and transition capabilities. Implementing advanced state estimation using sensor fusion (IMU, GPS, barometer) to enhance navigation accuracy. Designing cascaded PID and model-based controllers for thrust, attitude, and trajectory regulation. Exploring fault-tolerant control strategies for actuator redundancy and reliability. Focused on real-time embedded implementation and hardware integration to achieve robust, scalable UAV operations.",
      tech: ["Ongoing"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Design of a Portable ECG device",
      description: "During a college Hackathon Competetion where time was limited and had to come up with a product idea we had this idea of building a portable ecg device. Used a lowpower ADC from Texas Instruments and a low cost RaspberryPi Pico and implemented a portable ECG device.",
      tech: [],
      icon: <BriefcaseMedical className="w-6 h-6" />
    },
    {
      title: "Medical Waste Segregation Using Image Processing",
      description: "Developed a control system to automate the segregation of medical waste using image processing techniques. Implemented Convolutional Neural Networks (CNN) and Support Vector Machine (SVM) algorithms to classify and sort medical waste into designated bins accurately. This was for a college competetion.",
      tech: [],
      icon: <BriefcaseMedical className="w-6 h-6" />,
    },
    {
      title: "Retrofitting of CNC Control for a Conventional Lathe",
      description: "This is one of my most challenging projects. A fully operational lathe was retrofitted with a CNC control system. Reliability and Efficiency was key in this project. Of course successfully implemented it and it's still working till date. Took up this project in my Uncle's Workshop during the lockdown as I had nothing to do much at the time.",
      tech: [],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "OpenSource PLC design",
      description: "Designed a cost-effective open-source PLC system capable of integrating up to 100 devices. Implemented using low-cost microcontrollers such as Arduino and NodeMCU, the system was designed to ensure seamless scalability for efficient device control and coordination. Was part of my Final Year project in my Diploma Course",
      tech: [],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Design of Solenoid Electromagnetic Relay",
      description: "My First actual project when I joined Diploma after my schooling. Had a lot of fun during this and though it is very simple now I will always remember the first engineering project.",
      tech: [],
      icon: <Footprints className="w-6 h-6" />
    },
    {
      title: "SwiftBill",
      description: "SwiftBill is a modern, cross-platform desktop application for managing invoices, clients, and items built with React, Vite, Electron, and TypeScript. Tookup this small challenge to learn about creating a desktop application.",
      tech: [],
      icon: <Code className="w-6 h-6" />,
      codeUrl: "https://github.com/RangaSaravanaShetty/SwiftBill"
    },
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        className="h-full"
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="h-full"
          whileHover={{ 
            y: -8, 
            rotateX: 5,
            rotateY: 5,
            boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="bg-card border-border h-full hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {project.icon}
                </div>
              </div>
              <CardTitle className="text-foreground leading-snug">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-justify leading-relaxed md:leading-7">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(project.liveUrl || project.codeUrl) && (
              <CardFooter className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button asChild variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            )}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
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