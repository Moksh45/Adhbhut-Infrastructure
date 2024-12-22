import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Shield, Trophy } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description: "Committed to delivering exceptional quality in every project.",
    icon: Trophy
  },
  {
    title: "Integrity",
    description: "Maintaining highest standards of business ethics and transparency.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "Embracing new technologies and methodologies.",
    icon: Target
  },
  {
    title: "Collaboration",
    description: "Building strong partnerships with stakeholders.",
    icon: Users
  }
];

export function CoreValues() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}