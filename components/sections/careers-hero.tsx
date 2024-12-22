import { Users } from "lucide-react";

export function CareersHero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8">
          <Users className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold">Careers at Adhbhut Infrastructure</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Join our team of dedicated professionals shaping the future of infrastructure development.
          We offer competitive compensation, comprehensive benefits, and opportunities for growth.
        </p>
      </div>
    </section>
  );
}