import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Camera, Music, Book, Gamepad2, Coffee, Github, Bike } from "lucide-react";
import Navigation from "@/components/Navigation";
import GeometricBackground from "@/components/ui/geometric-bg";

const Hobbies = () => {
  const hobbies = [
    { name: "Photography", icon: <Camera className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "Travelling", icon: <Bike className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "Reading", icon: <Book className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Gaming", icon: <Gamepad2 className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
    { name: "Coffee Brewing", icon: <Coffee className="w-5 h-5" />, color: "from-amber-500 to-yellow-500" },
  ];

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
              Hobbies & <span className="text-primary">Interests</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring these passions
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-20">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Badge 
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r ${hobby.color} text-white border-0 cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <span className="mr-2">{hobby.icon}</span>
                    {hobby.name}
                  </Badge>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.footer 
            className="mt-20 text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="mb-4">© 2025 Portfolio. Built with passion and precision.</p>
            <div className="flex justify-center gap-6">
              <motion.a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default Hobbies;