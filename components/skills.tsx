import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Code,
  Figma,
  Users,
  Smartphone,
  Brain,
  Users2,
  Server,
  Database,
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      name: "UI/UX Design Principles",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-rose-100 dark:bg-rose-900/20",
      textColor: "text-rose-600 dark:text-rose-400",
    },
    {
      name: "Prototyping & Wireframing (Figma)",
      icon: <Figma className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "bg-amber-100 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400",
      description: "HTML, CSS, JavaScript, React, Tailwind",
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "bg-indigo-100 dark:bg-indigo-900/20",
      textColor: "text-indigo-600 dark:text-indigo-400",
      description: "Node.js, Express.js",
    },
    {
      name: "Database Management",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
      description: "MongoDB, MySQL",
    },
    {
      name: "User Research & Usability Testing",
      icon: <Users className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-cyan-100 dark:bg-cyan-900/20",
      textColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      name: "Problem Solving & Critical Thinking",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-orange-100 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
    },
    {
      name: "Collaboration & Communication",
      icon: <Users2 className="h-6 w-6" />,
      color: "bg-teal-100 dark:bg-teal-900/20",
      textColor: "text-teal-600 dark:text-teal-400",
    },
  ];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground mb-8">
          My technical and professional expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${skill.color}`}>
                    <div className={skill.textColor}>{skill.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    {skill.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
