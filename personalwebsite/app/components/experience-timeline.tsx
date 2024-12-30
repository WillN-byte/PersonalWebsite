import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  description: string[];
  type: "work" | "education" | "achievement";
}

const timelineData: TimelineItem[] = [
  {
    title: "Software Developer and Cofounder",
    organization: "PalAte",
    date: "Sep. 2023 - Present",
    description: [
      "Engineered a React Native app with 20+ screens and 15+ integrated packages",
      "Architected PostgreSQL databases using Supabase with row-level security",
      "Implemented bitwise algorithms to optimize party-restaurant matching",
      "Orchestrated product launch campaign targeting 1,000+ potential clients",
    ],
    type: "work",
  },
  {
    title: "Project Developer and Tutor",
    organization: "College Corps | San Jose State University",
    date: "Aug. 2022 – Present",
    description: [
      "Cultivated digital literacy and cybersecurity awareness in 280+ students",
      "Delivered comprehensive computer science and information security curriculum",
    ],
    type: "work",
  },
  {
    title: "IBM Good Tech Scholar",
    organization: "IBM",
    date: "Jul. 2022 - Aug. 2022",
    description: [
      "Spearheaded Agile SDLC methodologies, resulting in 30% faster product launch",
      "Developed a JavaScript application to address local homelessness and unemployment",
    ],
    type: "achievement",
  },
  {
    title: "AI/ML Intern",
    organization: "SJSU Software & Computer Engineering Society",
    date: "Aug. 2021 - Feb. 2023",
    description: [
      "Documented classification and clustering algorithms in Python",
      "Built a machine learning model using tokenization and BERT embeddings",
    ],
    type: "work",
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "San Jose State University",
    date: "Aug. 2021 - Dec 2025",
    description: [
      "GPA: 3.96",
      "President's Scholar (6 times)",
      "Member of Software & Computer Engineering Society and Virtual/Augmented Reality Club",
    ],
    type: "education",
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative container mx-auto px-4">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex justify-${index % 2 === 0 ? "start" : "end"}`}
        >
          <div className="relative w-full md:w-1/2 px-4">
            <Card className="relative">
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "-right-3" : "-left-3"
                } w-6 h-6 rounded-full bg-primary flex items-center justify-center`}
              >
                {item.type === "work" && (
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                )}
                {item.type === "education" && (
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                )}
                {item.type === "achievement" && (
                  <Award className="h-4 w-4 text-primary-foreground" />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {item.organization} | {item.date}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
