import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Scienceand Business Systems",
      institution: "P M C TECH",
      location: "Hosur, Tamilnadu",
      duration: "2022 - 2026",
      gpa: "7.9/10",
      highlights: [
        "Maintains an industrial visit for CSBS dept",
        "Lead Organizer - Innosync club for CSBS dept",
        "Participated 4+ symposium in Academics",
        "Published 1 papers in international journals",
      ],
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 card-gradient hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium text-foreground/80 mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">GPA: {edu.gpa}</Badge>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-lg mb-4">Highlights & Activities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
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
