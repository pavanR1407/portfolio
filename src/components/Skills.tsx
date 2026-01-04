import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Users, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code2,
      color: "accent",
      skills: [
        { name: "JavaScript / TypeScript", level: 60},
        { name: "React / Next.js", level: 85 },
        { name: "cyber security", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "SQL / Database Design", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "teal",
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 90 },
        { name: "Time Management", level: 82 },
        { name: "Adaptability", level: 87 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "primary",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma / UI Design", level: 75 },
        { name: "postman", level: 70 },
        { name: "jupyter-Notebook ", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-gradient hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
