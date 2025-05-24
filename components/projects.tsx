import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, LayoutDashboard } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SKINCARE E-COMMERCE PLATFORM",
      role: "Full Stack Developer & UI/UX Designer",
      objectives:
        "Built a seamless shopping experience for skincare products, emphasizing aesthetic design and user trust.",
      skills: [
        "Figma",
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "mysql",
        "Zustand",
      ],
      impact:
        "Increased user engagement and boosted sales conversions by 40% through optimized UI and performance.",
      icon: <Layers className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      color: "bg-pink-100 dark:bg-pink-900/20",
      link: "https://glamdermazone.com/", // Replace with your actual URL
    },
    {
      title: "Car Accident Prevention and Emergency Response System",
      role: "Contributer as FullStack Developer & UI/UX",
      objectives:
        "an anticipated School project  which Designed an immersive, scroll-driven interface to visualize real-time accident data and emergency workflows in an engaging, intuitive format.",
      skills: [
        "Figma",
        "React",
        "Framer Motion",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      impact:
        "Improved user comprehension and response efficiency through interactive storytelling and dynamic UI animations.",
      icon: (
        <LayoutDashboard className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      ),
      color: "bg-amber-100 dark:bg-amber-900/20",
      link: "https://integrated-project-rho.vercel.app/", // Replace with actual link
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-muted-foreground mb-8">
          Showcasing my design and development work
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${project.color}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <div>
                    <h4 className="text-sm font-medium">Objectives</h4>
                    <p className="text-sm">{project.objectives}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Skills Utilized</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Impact</h4>
                    <p className="text-sm">{project.impact}</p>
                  </div>

                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
