import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Building, HardHat } from "lucide-react";

const milestones = [
  {
    year: 1985,
    title: "Foundation",
    description: "Incorporated as 'Adhbhut Industrial Resources Limited', focusing on industrial resource development.",
    icon: Building
  },
  {
    year: 2000,
    title: "Evolution",
    description: "Transformed into 'Adhbhut Infrastructure Limited' to capitalize on infrastructure growth.",
    icon: HardHat
  },
  {
    year: "Present",
    title: "Market Leadership",
    description: "Leading infrastructure development with diverse operations in real estate and turnkey projects.",
    icon: CalendarDays
  }
];

export function CompanyHistory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <Card key={milestone.year}>
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" />
                  <div className="text-2xl font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}