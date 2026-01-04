import { Card } from "@/components/ui/card";
import { Heart, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Interests",
      items: ["Web Development", "AI & Machine Learning", "UI/UX Design", "Cyber Security"],
    },
    {
      icon: Target,
      title: "Current Mission",
      description: "Learning AI & Building Real-World Projects that make a difference",
    },
    {
      icon: Heart,
      title: "Quote I Believe In",
      description: '"The best way to predict the future is to create it."',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-8 card-gradient hover-lift">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-4">
                 I'm a passionate developer who enjoys solving problems and building meaningful digital experiences. 
                 I’m always learning and exploring new technologies, especially in web development and AI.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
              I believe technology should make life easier and better, and that mindset drives me to write clean,
               thoughtful, and user-focused code.
               Collaboration, growth, and creating with purpose are values I carry into every project.
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full card-gradient hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  </div>
                  {item.items ? (
                    <ul className="space-y-2">
                      {item.items.map((listItem) => (
                        <li key={listItem} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground italic">{item.description}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
