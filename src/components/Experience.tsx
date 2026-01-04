import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company:"glow logics.",
      role:"cyber security  -Intern",
      duration:"march 2025 - may 2025",
      responsibilities: [
        "Learned and analyzed various cyber attack techniques such as phishing, DoS/DDoS, MITM, and brute-force etc.",
        "Performed risk analysis and security audits",
        "Implemented cybersecurity best practices to protect systems and data",
        "Supported incident detection and response processes",
      ],
      technologies: ["Python", "kali linux", "wireshark", "Nmap", "OWASP","Cryptography"],
    },
    {
      company: "Q Spiders.",
      role: "Full Stack Developer",
      duration: "Jun 2025 - August 2025",
      responsibilities: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Optimized database queries improving application performance by 50%",
        "Participated in agile ceremonies and contributed to sprint planning",
      ],
      technologies: ["react", "java", "SQL", "node.js", "git","docker"],
    },
    
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                 index % 2 === 0 ? "md:pr-1/2 text-left" : "md:pl-1/2 md:ml-auto text-left"

                }`}
              >


                <Card className="p-6 card-gradient hover-lift ml-8 md:ml-0">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-1">{exp.role}</h3>
                      <p className="text-lg font-medium text-foreground/80 mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
