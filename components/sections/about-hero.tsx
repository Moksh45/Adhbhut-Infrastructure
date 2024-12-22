import { Building2 } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8">
          <Building2 className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold">About Adhbhut Infrastructure</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Since 1985, we've been at the forefront of infrastructure development in India, 
          evolving from industrial resources to comprehensive infrastructure solutions.
        </p>
      </div>
    </section>
  );
}