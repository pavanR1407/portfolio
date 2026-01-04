import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Certifications = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const certifications = [
    {
      title: "Cybersecurity Intern Certification",
      issuer: "Glow logics",
      date: "2025",
      badge: "Beginner",
      color: "accent",
      url: "/certificates/internship.png",
    },
    {
      title: "Cyber Security & Ethical Hacking - Course",
      issuer: "Glow logics",
      date: "2025",
      badge: "Beginner",
      color: "teal",
      url: "/certificates/course.png",
    },
    {
      title: "Project Risk Management",
      issuer: "Udemy",
      date: "2025",
      badge: "Proficient",
      color: "primary",
      url: "/certificates/project.png",
    },
    {
      title: "Python for Beginners",
      issuer: "Udemy",
      date: "2025",
      badge: "Certified",
      color: "accent",
      url: "/certificates/python.png",
    },
    {
      title: "Figma for Mobile Projects",
      issuer: "Udemy",
      date: "2025",
      badge: "Certified",
      color: "primary",
      url: "/certificates/figma.png",
    }
  ];

  const achievements = [
    {
      title: "International Conference ",
      url: "/achievements/journal.jpg"
    },
    {
      title: "Outstanding Performance Recognition – FACE Prep",
      url: "/achievements/faceprep.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized expertise and notable accomplishments
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Professional Certifications
          </h3>

          {/* First 4 certificates */}
          <div className="grid md:grid-cols-2 gap-6 justify-items-center">
            {certifications.slice(0, 4).map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card
                  className="p-6 card-gradient hover-lift group cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${cert.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Award className={`h-6 w-6 text-${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-display font-bold text-lg">{cert.title}</h4>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{cert.badge}</Badge>
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 5th certificate centered */}
          {certifications.length > 4 && (
            <div className="flex justify-center mt-6">
              <motion.div
                key={certifications[4].title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <Card
                  className="p-6 card-gradient hover-lift group cursor-pointer"
                  onClick={() => openModal(certifications[4])}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${certifications[4].color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Award className={`h-6 w-6 text-${certifications[4].color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-display font-bold text-lg">{certifications[4].title}</h4>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-muted-foreground mb-2">{certifications[4].issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{certifications[4].badge}</Badge>
                        <span className="text-sm text-muted-foreground">{certifications[4].date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          )}
        </div>

{/* Achievements Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-display font-bold mb-6 text-center">
    Notable Achievements
  </h3>
  <Card className="p-8 card-gradient">
    <div className="grid md:grid-cols-2 gap-4 justify-items-center">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="p-4 bg-background/60 rounded-lg hover-lift cursor-pointer max-w-3xl mx-auto"
          onClick={() => openModal(achievement)}
        >
          <span className="font-medium">{achievement.title}</span>
        </motion.div>
      ))}
    </div>
  </Card>
</motion.div>
      </div>

      {/* Modal for Certificates & Achievements */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-lg w-full max-w-4xl shadow-lg relative flex flex-col items-center p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-xl md:text-2xl font-bold my-4 text-center">
              {selectedItem.title}
            </h3>

            {/* Display PNG Images for both certificates and achievements */}
            {selectedItem.url ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : (
              <p className="text-muted-foreground text-center">{selectedItem.details}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
