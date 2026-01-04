import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/pavanR1407", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pavanr140723", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pavan140723@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with passion and modern web technologies
            </p>
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-accent hover:bg-accent/90 shadow-lg hover-lift"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
