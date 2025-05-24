import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor's in SoftWare Engineering",
      institution: "Adama Science and Technology University",
      period: "2021-2026",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      degree: "Secondary School",
      institution: "St.Joseph School",
      location: "Ethiopia, Adama City",
      period: "2018-2021",
      icon: <School className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <p className="text-muted-foreground mb-8">My academic background</p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">{edu.icon}</div>
                  <div>
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-sm">{edu.institution}</p>
                    {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
                    <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
