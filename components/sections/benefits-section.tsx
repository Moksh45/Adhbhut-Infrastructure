import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, GraduationCap, Target } from "lucide-react";

const benefits = [
  {
    title: "Competitive Salary",
    description: "Market-leading compensation packages and performance bonuses",
    icon: Briefcase
  },
  {
    title: "Health Benefits",
    description: "Comprehensive medical coverage for you and your family",
    icon: Heart
  },
  {
    title: "Learning & Development",
    description: "Continuous professional development opportunities",
    icon: GraduationCap
  },
  {
    title: "Career Growth",
    description: "Clear career progression paths and mentorship programs",
    icon: Target
  }
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why Join Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title}>
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}