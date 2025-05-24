import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "FullStack Developer",
      company: "",
      period: "Present",
      description:
        "Contributed to diverse full stack projects by optimizing performance, enhancing user experience, and delivering fast, efficient, and scalable solutions across front-end and back-end systems.",
    },
    {
      title: "Fresher UI/UX Designer | Frontend Developer",
      company: "",
      period: "Present",
      description:
        "Contributed to various projects, focusing on enhancing user experience through thoughtful design and efficient development.",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <p className="text-muted-foreground mb-8">My professional journey</p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-medium">{exp.title}</h3>
                      {exp.company && (
                        <span className="text-muted-foreground">
                          at {exp.company}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.period}
                    </p>
                    <p className="mt-3">{exp.description}</p>
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
