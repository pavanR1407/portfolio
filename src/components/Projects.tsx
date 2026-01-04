import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { Domain } from "node:domain";

export const Projects = () => {
  const projects = [
    {
      title: "Spectrum-Sense",
      description: "Spectrum Sense is a sleek, interactive color sequence memory game that challenges players to observe, remember, and repeat evolving color patterns..",
      image: project1,
      technologies: ["React", "vite", "tailwindCSS", "Shadcn UI"],
      liveUrl: "https://spectrummemo.netlify.app",
      githubUrl: "https://github.com/pavanR1407/Spectrum-Sense.git",
    },
    {
      title: "Krishi AI",
      description: "KrishiAI is an intelligent smart agriculture platform designed to assist farmers with data-driven insights, crop management, and decision support.",
      image: project2,
      technologies: ["typeScript", "vite", "tailwindCSS", "Shadcn UI"],
      liveUrl: "https://krushifarm.netlify.app/",
      githubUrl: "https://github.com/pavanR1407/Krishi-AI.git",
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool with natural language processing and automated optimization.",
      image: project3,
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Developer Tools Suite",
      description: "Comprehensive IDE extension package with code snippets, debugging tools, and productivity enhancements.",
      image: project4,
      technologies: ["TypeScript", "VS Code API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full card-gradient hover-lift">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
