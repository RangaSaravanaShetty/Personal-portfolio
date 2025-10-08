import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import GeometricBackground from "@/components/ui/geometric-bg";

const Roadmap = () => {
  const roadmapData = [
    { 
      year: "2023-2026", 
      title: "Bachelor's in Electrical and Electronics Engineering", 
      company: "MVJ College of Engineering", 
      description: "Currently pursuing my Bachelor's in Electrical and Electronics Engineering from MVJ College of Engineering"
    },
    { 
      year: "2021-2023", 
      title: "Design Engineer", 
      company: "Signaltron Systems PVT LTD", 
      description: "Design of Enclosures for High Power PCBs and Enclosures for High Power RF Modules. Worked on 5+ projects from design to production to deployment."
    },
    { 
      year: "2019-2023", 
      title: "Technician", 
      company: "Signalchip Innovations PVT LTD", 
      description: "Inventory Supervision, PCB Fabrication, PCBA Assembly, SMT Assembly, and more"
    },
    { 
      year: "2016-2019", 
      title: "Diploma in Electrical and Electronics Engineering", 
      company: "MVJ Polytechnic", 
      description: "Got my diploma in Electrical and Electronics Engineering from MVJ Polytechnic"
    },
  ];

  const TimelineCard = ({ data, index }: { data: typeof roadmapData[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <CardTitle className="text-primary">{data.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{data.company}</CardDescription>
              </div>
              <Badge variant="outline" className="bg-secondary text-secondary-foreground border-primary/30 w-fit">
                {data.year}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{data.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <GeometricBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-primary">Roadmap</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through the world of technology and innovation
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {roadmapData.map((item, index) => (
              <TimelineCard key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;