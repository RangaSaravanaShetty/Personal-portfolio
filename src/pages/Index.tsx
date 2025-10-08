import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Mail, Instagram, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import profileImage from "@/assets/profile-avatar.jpg";
import GeometricBackground from "@/components/ui/geometric-bg";

const Index = () => {
  const titleText = "Engineer | Innovator | Solver";

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/RangaSaravanaShetty", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/ranganath-saravana-1390271bb", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/Ranga_Saravana_", label: "Twitter" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/ranga_saravana_shetty", label: "Instagram" },
    { icon: <Mail className="w-6 h-6" />, url: "mailto:ranganathsaravana@gmail.com", label: "Email" },
  ];

  const resumeUrl = (import.meta as any).env?.VITE_RESUME_URL || "/resume.pdf";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <GeometricBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-10">
        <div className="container mx-auto text-center max-w-full">
          {/* Profile Photo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Avatar className="w-32 h-32 border-4 border-primary/30 shadow-lg shadow-primary/20">
              <AvatarImage src={profileImage} alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ranganath Saravana
          </motion.h2>

          {/* Title */}
          <motion.h1 className="whitespace-nowrap text-[clamp(18px,5.2vw,48px)] sm:text-4xl md:text-5xl leading-tight font-bold mb-6 text-primary w-fit mx-auto max-w-full overflow-hidden">
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.02,
                  ease: "easeOut"
                }}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Contact Details */}
          <motion.div
            className="flex flex-col gap-2 mb-8 text-muted-foreground text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a 
              href="mailto:john.doe@example.com" 
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors break-words"
            >
              <Mail className="w-4 h-4" />
              <span className="break-all">ranganathsaravana@gmail.com</span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7019922146</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ranganath-saravana-1390271bb" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors break-words"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/RanganathSaravana</span>
            </a>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[680px] mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            I'm an Engineer with a Bachelor's degree in Electrical and Electronics. My education gave me the fundamentals, but curiosity is what truly powers me.
            I'm always ready to tackle new challenges and am genuinely excited to learn all that the world has to offer.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Link to="/projects">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all w-full sm:w-auto"
              >
                View My Work
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto"
              >
                My Journey
              </Button>
            </Link>
            <a href={resumeUrl} download>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto gap-2"
              >
                <FileText className="w-5 h-5" />
                My Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 + index * 0.1, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  color: "hsl(var(--primary))"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default Index;