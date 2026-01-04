import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/pavanR1407", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pavanr140723", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pavan140723@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 🌟 ENHANCED PARTICLE LAYER */}
      <div className="particle-layer-v2">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="revolving-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * -15}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 gradient-bg opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text">PAVAN </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
        >
          A Passionate Learner, Builder & Innovator
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences with code, creativity, and a commitment to continuous learning.
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 font-semibold backdrop-blur-sm"
            onClick={() => scrollToSection("projects")}
          >
            See My Work
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all shadow-md border border-border"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};